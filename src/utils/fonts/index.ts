// Font utilities and configurations
// Add your font-related utilities here

export const FONT_FAMILIES = {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  serif: ['Georgia', 'serif'],
  mono: ['Fira Code', 'monospace'],
} as const

export type FontFamily = keyof typeof FONT_FAMILIES