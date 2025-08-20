/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(process.cwd(), ".env.local") });

const FIGMA_API_BASE = "https://api.figma.com/v1";

function ensureDir(dirPath) {
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}
}

function extractFileKeyFromUrl(url) {
	if (!url) return null;
	try {
		const u = new URL(url);
		const parts = u.pathname.split("/").filter(Boolean);
		const keyIndex = parts.findIndex((p) => p === "file" || p === "proto");
		if (keyIndex !== -1 && parts[keyIndex + 1]) {
			return parts[keyIndex + 1];
		}
		return null;
	} catch {
		return null;
	}
}

function extractNodeIdFromUrl(url) {
	if (!url) return null;
	try {
		const u = new URL(url);
		const nodeIdParam = u.searchParams.get("node-id");
		if (!nodeIdParam) return null;
		return nodeIdParam.replace("-", ":");
	} catch {
		return null;
	}
}

async function figmaGet(endpoint, token) {
	const res = await fetch(`${FIGMA_API_BASE}${endpoint}`, {
		headers: { "X-Figma-Token": token },
	});
	if (!res.ok) {
		const text = await res.text();
		throw new Error(`Figma API error ${res.status}: ${text}`);
	}
	return res.json();
}

async function downloadToFile(url, outPath) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to download: ${url}`);
	const buf = Buffer.from(await res.arrayBuffer());
	ensureDir(path.dirname(outPath));
	fs.writeFileSync(outPath, buf);
}

async function mapNodes(fileKey, token) {
	const data = await figmaGet(`/files/${fileKey}`, token);
	const nodes = [];
	function walk(node, pageName) {
		if (!node) return;
		if (node.type === "CANVAS") pageName = node.name;
		if (["CANVAS", "FRAME", "COMPONENT", "COMPONENT_SET", "GROUP", "TEXT"].includes(node.type)) {
			nodes.push({ page: pageName, id: node.id, type: node.type, name: node.name });
		}
		if (node.children) node.children.forEach((c) => walk(c, pageName));
	}
	walk(data.document, "");
	const out = path.join(process.cwd(), "tmp", "figma-map.json");
	ensureDir(path.dirname(out));
	fs.writeFileSync(out, JSON.stringify({ fileKey, count: nodes.length, nodes }, null, 2));
	console.log(`Saved map -> ${out}`);
}

async function exportNodePng(fileKey, token, nodeId, outFile) {
	const images = await figmaGet(`/images/${fileKey}?ids=${encodeURIComponent(nodeId)}&format=png&scale=2`, token);
	const url = images.images[nodeId];
	if (!url) throw new Error(`No image URL returned for node ${nodeId}`);
	await downloadToFile(url, outFile);
	console.log(`Exported ${nodeId} -> ${outFile}`);
}

async function fetchNodeTree(fileKey, token, nodeId) {
	const data = await figmaGet(`/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`, token);
	return data.nodes[nodeId]?.document || null;
}

function collectTextNodes(node, result) {
	if (!node) return;
	if (node.type === "TEXT") {
		result.push({ id: node.id, name: node.name, characters: node.characters || "" });
	}
	if (node.children) node.children.forEach((c) => collectTextNodes(c, result));
}

async function extractText(fileKey, token, nodeId, outFile) {
	const root = await fetchNodeTree(fileKey, token, nodeId);
	if (!root) throw new Error("Unable to fetch node tree for text extraction.");
	const texts = [];
	collectTextNodes(root, texts);
	ensureDir(path.dirname(outFile));
	fs.writeFileSync(outFile, JSON.stringify({ nodeId, count: texts.length, texts }, null, 2));
	console.log(`Saved text -> ${outFile}`);
}

(async function main() {
	const token = process.env.FIGMA_ACCESS_TOKEN;
	const fileKey = process.env.FIGMA_FILE_ID || extractFileKeyFromUrl(process.env.FIGMA_FILE_URL);
	const nodeFromUrl = extractNodeIdFromUrl(process.env.FIGMA_FILE_URL);
	const isMap = process.argv.includes("--map");
	const isExport = process.argv.includes("--export");
	const isText = process.argv.includes("--text");

	if (!token) {
		console.error("Missing FIGMA_ACCESS_TOKEN. Set it in .env.local or environment.");
		process.exit(1);
	}
	if (!fileKey) {
		console.error("Could not determine Figma file key. Provide FIGMA_FILE_ID or a valid FIGMA_FILE_URL.");
		process.exit(1);
	}

	if (isMap) {
		await mapNodes(fileKey, token);
		return;
	}

	if (isExport) {
		const nodeId = process.env.FIGMA_NODE_ID || nodeFromUrl;
		if (!nodeId) {
			console.error("Provide FIGMA_NODE_ID or include node-id= in FIGMA_FILE_URL to export a specific frame.");
			process.exit(1);
		}
		const outPath = path.join(process.cwd(), "public", "assets", "landing-hero.png");
		await exportNodePng(fileKey, token, nodeId, outPath);
		return;
	}

	if (isText) {
		const nodeId = process.env.FIGMA_NODE_ID || nodeFromUrl;
		if (!nodeId) {
			console.error("Provide FIGMA_NODE_ID or include node-id= in FIGMA_FILE_URL to extract text from a specific frame.");
			process.exit(1);
		}
		const outPath = path.join(process.cwd(), "tmp", "landing-text.json");
		await extractText(fileKey, token, nodeId, outPath);
		return;
	}

	console.log("Nothing to do. Use --map or --export or --text.");
})();
