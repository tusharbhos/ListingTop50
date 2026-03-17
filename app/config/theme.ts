// config/theme.ts

export interface Theme {
  name: string;
  primary: string;      // Main orange color
  secondary: string;    // Secondary color
  text: string;         // Default text color
  bg: string;          // Background color
  border: string;      // Border color
  heading: string;     // Heading color
  gradientFrom: string; // Gradient start
  gradientTo: string;   // Gradient end
  hover: string;       // Hover state
  focus: string;       // Focus ring
}

export const themes: Record<string, Theme> = {
  default: {
    name: "Top50 Properties",
    primary: "#f97316",      // orange-500
    secondary: "#ea580c",     // orange-600
    text: "#000000",         // black
    bg: "#ffffff",           // white
    border: "#e5e7eb",       // gray-200
    heading: "#1f2937",      // gray-800
    gradientFrom: "#fb923c", // orange-400
    gradientTo: "#ea580c",   // orange-600
    hover: "#fb923c",        // orange-400
    focus: "#f97316",        // orange-500
  },
  
  "listing-top50.vercel.app": {
    name: "tushar Prime Properties",
    primary: "#2563eb",      // blue-600
    secondary: "#1d4ed8",     // blue-700
    text: "#000000",
    bg: "#ffffff",
    border: "#e5e7eb",
    heading: "#1e3a8a",      // blue-900
    gradientFrom: "#60a5fa", // blue-400
    gradientTo: "#2563eb",   // blue-600
    hover: "#3b82f6",        // blue-500
    focus: "#2563eb",        // blue-600
  },
  
  "delhi.realestate.com": {
    name: "Delhi Signature Homes",
    primary: "#7c3aed",      // purple-600
    secondary: "#6d28d9",     // purple-700
    text: "#000000",
    bg: "#ffffff",
    border: "#e5e7eb",
    heading: "#4c1d95",      // purple-900
    gradientFrom: "#a78bfa", // purple-400
    gradientTo: "#7c3aed",   // purple-600
    hover: "#8b5cf6",        // purple-500
    focus: "#7c3aed",        // purple-600
  },
  
  "bangalore.realestate.com": {
    name: "Bengaluru Tech Homes",
    primary: "#059669",      // emerald-600
    secondary: "#047857",     // emerald-700
    text: "#000000",
    bg: "#ffffff",
    border: "#e5e7eb",
    heading: "#064e3b",      // emerald-900
    gradientFrom: "#34d399", // emerald-400
    gradientTo: "#059669",   // emerald-600
    hover: "#10b981",        // emerald-500
    focus: "#059669",        // emerald-600
  },
  
  "pune.realestate.com": {
    name: "Pune Premium Estates",
    primary: "#dc2626",      // red-600
    secondary: "#b91c1c",     // red-700
    text: "#000000",
    bg: "#ffffff",
    border: "#e5e7eb",
    heading: "#7f1d1d",      // red-900
    gradientFrom: "#f87171", // red-400
    gradientTo: "#dc2626",   // red-600
    hover: "#ef4444",        // red-500
    focus: "#dc2626",        // red-600
  },
  
  "hyderabad.realestate.com": {
    name: "Hyderabad Pearl Properties",
    primary: "#b45309",      // amber-700
    secondary: "#92400e",     // amber-800
    text: "#000000",
    bg: "#ffffff",
    border: "#e5e7eb",
    heading: "#78350f",      // amber-900
    gradientFrom: "#fbbf24", // amber-400
    gradientTo: "#b45309",   // amber-700
    hover: "#d97706",        // amber-600
    focus: "#b45309",        // amber-700
  },
  
  "chennai.realestate.com": {
    name: "Chennai Coastal Properties",
    primary: "#0284c7",      // sky-600
    secondary: "#0369a1",     // sky-700
    text: "#000000",
    bg: "#ffffff",
    border: "#e5e7eb",
    heading: "#0c4a6e",      // sky-900
    gradientFrom: "#38bdf8", // sky-400
    gradientTo: "#0284c7",   // sky-600
    hover: "#0ea5e9",        // sky-500
    focus: "#0284c7",        // sky-600
  },
  
  "kolkata.realestate.com": {
    name: "Kolkata Heritage Homes",
    primary: "#b91c1c",      // red-700
    secondary: "#991b1b",     // red-800
    text: "#000000",
    bg: "#ffffff",
    border: "#e5e7eb",
    heading: "#7f1d1d",      // red-900
    gradientFrom: "#ef4444", // red-500
    gradientTo: "#b91c1c",   // red-700
    hover: "#dc2626",        // red-600
    focus: "#b91c1c",        // red-700
  },
  
  "ahmedabad.realestate.com": {
    name: "Ahmedabad Modern Spaces",
    primary: "#ca8a04",      // yellow-600
    secondary: "#a16207",     // yellow-700
    text: "#000000",
    bg: "#ffffff",
    border: "#e5e7eb",
    heading: "#713f12",      // yellow-900
    gradientFrom: "#facc15", // yellow-400
    gradientTo: "#ca8a04",   // yellow-600
    hover: "#eab308",        // yellow-500
    focus: "#ca8a04",        // yellow-600
  },
  
  "jaipur.realestate.com": {
    name: "Jaipur Royal Estates",
    primary: "#c2410c",      // orange-700
    secondary: "#9a3412",     // orange-800
    text: "#000000",
    bg: "#ffffff",
    border: "#e5e7eb",
    heading: "#7b341e",      // orange-900
    gradientFrom: "#fb923c", // orange-400
    gradientTo: "#c2410c",   // orange-700
    hover: "#ea580c",        // orange-600
    focus: "#c2410c",        // orange-700
  },
};

export const getTheme = (domain: string): Theme => {
  const cleanDomain = domain.replace("www.", "");
  return themes[cleanDomain] || themes["default"];
};