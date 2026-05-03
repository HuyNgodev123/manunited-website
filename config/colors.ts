// config/colors.ts

export const colors = {
  // Primary Colors
  primary: '#dc2626',        // Red
  primaryDark: '#b91c1c',    // Dark Red
  primaryLight: '#f87171',   // Light Red

  // Background
  bg: {
    dark: '#0f172a',         // Very Dark
    darker: '#000000',       // Black
    light: '#1e293b',        // Light Dark
    card: '#1f2937',         // Card Background
  },

  // Text Colors
  text: {
    primary: '#ffffff',      // White
    secondary: '#d1d5db',    // Light Gray
    muted: '#9ca3af',        // Muted Gray
  },

  // Utility Colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',

  // Gradient
  gradient: {
    red: 'linear-gradient(to right, #dc2626, #b91c1c)',
    dark: 'linear-gradient(to right, #0f172a, #1e293b)',
  },
};

export const tailwindColors = {
  primary: 'red-600',
  primaryDark: 'red-700',
  primaryLight: 'red-500',
  bg: 'gray-900',
  bgDark: 'gray-950',
  text: 'white',
  textMuted: 'gray-400',
};