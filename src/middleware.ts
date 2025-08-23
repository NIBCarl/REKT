// Supported locales for the application
export const locales = [
  'en', 'es', 'zh', 'ja', 'ko', 'fr', 'de', 'it', 'pt', 'ru', 
  'ar', 'hi', 'bn', 'ur', 'he', 'fa', 'uk', 'sr', 'sw', 'kk', 
  'bg', 'cs', 'nl', 'el', 'hu', 'id', 'pl', 'ro', 'sk', 'sl', 
  'th', 'tr', 'vi'
] as const;

export type Locale = typeof locales[number];
