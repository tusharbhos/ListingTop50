// config/theme.ts

export interface Theme {
  name: string;
  // Primary Colors
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryGradient: string;
  
  // Secondary Colors  
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  secondaryGradient: string;
  
  // Text Colors
  text: string;
  textLight: string;
  textDark: string;
  textMuted: string;
  
  // Background Colors
  bg: string;
  bgLight: string;
  bgDark: string;
  bgWhite: string;
  
  // Border Colors
  border: string;
  borderLight: string;
  borderDark: string;
  
  // Status Colors
  success: string;
  warning: string;
  error: string;
  info: string;
  
  // UI Elements
  shadow: string;
  shadowLg: string;
  ring: string;
  overlay: string;
  
  // Progress Bar
  progressBar: {
    bg: string;
    fill: string;
    glow: string;
  };
}

// Default Theme
const defaultTheme: Theme = {
  name: "Top50 Properties",
  
  // Primary Colors
  primary: "#f97316",
  primaryLight: "#fb923c",
  primaryDark: "#ea580c",
  primaryGradient: "linear-gradient(to right, #f97316, #fb923c, #ea580c)",
  
  // Secondary Colors
  secondary: "#6b7280",
  secondaryLight: "#9ca3af",
  secondaryDark: "#4b5563",
  secondaryGradient: "linear-gradient(to right, #6b7280, #9ca3af, #4b5563)",
  
  // Text Colors
  text: "#000000",
  textLight: "#4b5563",
  textDark: "#111827",
  textMuted: "#6b7280",
  
  // Background Colors
  bg: "#f3f4f6",
  bgLight: "#f9fafb",
  bgDark: "#e5e7eb",
  bgWhite: "#ffffff",
  
  // Border Colors
  border: "#e5e7eb",
  borderLight: "#f3f4f6",
  borderDark: "#d1d5db",
  
  // Status Colors
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6",
  
  // UI Elements
  shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
  shadowLg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  ring: "0 0 0 2px #f97316",
  overlay: "rgba(0, 0, 0, 0.5)",
  
  // Progress Bar
  progressBar: {
    bg: "#e5e7eb",
    fill: "linear-gradient(to right, #f97316, #fb923c, #ea580c)",
    glow: "#fed7aa",
  },
};

// Domain-specific themes
export const themes: Record<string, Theme> = {
  default: defaultTheme,
  
  // Domain 1: Luxury Properties
  "listing-top50.vercel.app": {
    ...defaultTheme,
    name: "Tushar Top50 Properties",
    primary: "#b91c1c",
    primaryLight: "#dc2626",
    primaryDark: "#991b1b",
    primaryGradient: "linear-gradient(to right, #b91c1c, #dc2626, #991b1b)",
  },
  
  // Domain 2: Commercial Properties
  "commercial.top50properties.com": {
    ...defaultTheme,
    name: "Commercial Top50 Properties",
    primary: "#2563eb",
    primaryLight: "#3b82f6",
    primaryDark: "#1d4ed8",
    primaryGradient: "linear-gradient(to right, #2563eb, #3b82f6, #1d4ed8)",
  },
  
  // Domain 3: Investment Properties
  "investment.top50properties.com": {
    ...defaultTheme,
    name: "Investment Top50 Properties",
    primary: "#059669",
    primaryLight: "#10b981",
    primaryDark: "#047857",
    primaryGradient: "linear-gradient(to right, #059669, #10b981, #047857)",
  },
  
  // Domain 4: Plots & Land
  "plots.top50properties.com": {
    ...defaultTheme,
    name: "Plots & Land Top50 Properties",
    primary: "#b45309",
    primaryLight: "#d97706",
    primaryDark: "#92400e",
    primaryGradient: "linear-gradient(to right, #b45309, #d97706, #92400e)",
  },
  
  // Domain 5: Tax-Smart Properties
  "tax.top50properties.com": {
    ...defaultTheme,
    name: "Tax-Smart Top50 Properties",
    primary: "#7e22ce",
    primaryLight: "#9333ea",
    primaryDark: "#6b21a5",
    primaryGradient: "linear-gradient(to right, #7e22ce, #9333ea, #6b21a5)",
  },
  
  // Domain 6: Special Deals
  "special.top50properties.com": {
    ...defaultTheme,
    name: "Special Deals Top50 Properties",
    primary: "#dc2626",
    primaryLight: "#ef4444",
    primaryDark: "#b91c1c",
    primaryGradient: "linear-gradient(to right, #dc2626, #ef4444, #b91c1c)",
  },
  
  // Domain 7: Future-Ready Homes
  "future.top50properties.com": {
    ...defaultTheme,
    name: "Future-Ready Top50 Properties",
    primary: "#0d9488",
    primaryLight: "#14b8a6",
    primaryDark: "#0f766e",
    primaryGradient: "linear-gradient(to right, #0d9488, #14b8a6, #0f766e)",
  },
  
  // Domain 8: NRI Properties
  "nri.top50properties.com": {
    ...defaultTheme,
    name: "NRI Top50 Properties",
    primary: "#c2410c",
    primaryLight: "#ea580c",
    primaryDark: "#9a3412",
    primaryGradient: "linear-gradient(to right, #c2410c, #ea580c, #9a3412)",
  },
  
  // Domain 9: First-Time Buyers
  "firsttime.top50properties.com": {
    ...defaultTheme,
    name: "First-Time Buyers Top50 Properties",
    primary: "#0284c7",
    primaryLight: "#0ea5e9",
    primaryDark: "#0369a1",
    primaryGradient: "linear-gradient(to right, #0284c7, #0ea5e9, #0369a1)",
  },
  
  // Domain 10: Senior Living
  "senior.top50properties.com": {
    ...defaultTheme,
    name: "Senior Living Top50 Properties",
    primary: "#4f46e5",
    primaryLight: "#6366f1",
    primaryDark: "#4338ca",
    primaryGradient: "linear-gradient(to right, #4f46e5, #6366f1, #4338ca)",
  },
};

// Helper function to get theme CSS variables
export const getThemeCSS = (theme: Theme) => ({
  '--primary': theme.primary,
  '--primary-light': theme.primaryLight,
  '--primary-dark': theme.primaryDark,
  '--primary-gradient': theme.primaryGradient,
  '--secondary': theme.secondary,
  '--secondary-light': theme.secondaryLight,
  '--secondary-dark': theme.secondaryDark,
  '--secondary-gradient': theme.secondaryGradient,
  '--text': theme.text,
  '--text-light': theme.textLight,
  '--text-dark': theme.textDark,
  '--text-muted': theme.textMuted,
  '--bg': theme.bg,
  '--bg-light': theme.bgLight,
  '--bg-dark': theme.bgDark,
  '--bg-white': theme.bgWhite,
  '--border': theme.border,
  '--border-light': theme.borderLight,
  '--border-dark': theme.borderDark,
  '--success': theme.success,
  '--warning': theme.warning,
  '--error': theme.error,
  '--info': theme.info,
  '--shadow': theme.shadow,
  '--shadow-lg': theme.shadowLg,
  '--ring': theme.ring,
  '--overlay': theme.overlay,
  '--progress-bg': theme.progressBar.bg,
  '--progress-fill': theme.progressBar.fill,
  '--progress-glow': theme.progressBar.glow,
} as React.CSSProperties);