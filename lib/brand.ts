export const colors = {
  forestGreen: '#2F4A3A',
  sageGreen: '#6EB76F',
  lightSage: '#AEC1B0',
  terracotta: '#E2845F',
  cream: '#F7F2E8',
  white: '#FFFFFF',
  darkText: '#1C2B22',
} as const

export type BrandColor = keyof typeof colors

export const fonts = {
  display: 'Cormorant Garamond',
  sans: 'DM Sans',
} as const
