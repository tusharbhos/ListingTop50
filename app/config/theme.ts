// config/theme.ts

export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  text: string;
  textLight: string;
  bg: string;
  bgLight: string;
  border: string;
  borderLight: string;
  gradient: {
    from: string;
    to: string;
  };
  hover: {
    primary: string;
    secondary: string;
  };
  focus: string;
  heading: {
    h1: string;
    h2: string;
    h3: string;
  };
}

export const themes: Record<string, Theme> = {
  default: {
    name: "Default",
    primary: "#f97316", // orange-500
    secondary: "#ea580c", // orange-600
    text: "#000000",
    textLight: "#4b5563", // gray-600
    bg: "#ffffff",
    bgLight: "#f9fafb", // gray-50
    border: "#e5e7eb", // gray-200
    borderLight: "#f3f4f6", // gray-100
    gradient: {
      from: "#f97316",
      to: "#ea580c",
    },
    hover: {
      primary: "#ea580c", // orange-600
      secondary: "#c2410c", // orange-700
    },
    focus: "#f97316",
    heading: {
      h1: "text-4xl md:text-5xl font-bold",
      h2: "text-3xl md:text-4xl font-semibold",
      h3: "text-2xl md:text-3xl font-semibold",
    },
  },
 "listing-top50.vercel.app": {
    name: "listing-top50",
    primary: "#2563eb", // blue-600
    secondary: "#1d4ed8", // blue-700
    text: "#000000",
    textLight: "#4b5563",
    bg: "#ffffff",
    bgLight: "#f9fafb",
    border: "#e5e7eb",
    borderLight: "#f3f4f6",
    gradient: {
      from: "#2563eb",
      to: "#1d4ed8",
    },
    hover: {
      primary: "#1d4ed8",
      secondary: "#1e40af",
    },
    focus: "#2563eb",
    heading: {
      h1: "text-4xl md:text-5xl font-bold",
      h2: "text-3xl md:text-4xl font-semibold",
      h3: "text-2xl md:text-3xl font-semibold",
    },
  },
  domain2: {
    name: "Domain 2",
    primary: "#059669", // emerald-600
    secondary: "#047857", // emerald-700
    text: "#000000",
    textLight: "#4b5563",
    bg: "#ffffff",
    bgLight: "#f9fafb",
    border: "#e5e7eb",
    borderLight: "#f3f4f6",
    gradient: {
      from: "#059669",
      to: "#047857",
    },
    hover: {
      primary: "#047857",
      secondary: "#065f46",
    },
    focus: "#059669",
    heading: {
      h1: "text-4xl md:text-5xl font-bold",
      h2: "text-3xl md:text-4xl font-semibold",
      h3: "text-2xl md:text-3xl font-semibold",
    },
  },
  domain3: {
    name: "Domain 3",
    primary: "#9333ea", // purple-600
    secondary: "#7e22ce", // purple-700
    text: "#000000",
    textLight: "#4b5563",
    bg: "#ffffff",
    bgLight: "#f9fafb",
    border: "#e5e7eb",
    borderLight: "#f3f4f6",
    gradient: {
      from: "#9333ea",
      to: "#7e22ce",
    },
    hover: {
      primary: "#7e22ce",
      secondary: "#6b21a8",
    },
    focus: "#9333ea",
    heading: {
      h1: "text-4xl md:text-5xl font-bold",
      h2: "text-3xl md:text-4xl font-semibold",
      h3: "text-2xl md:text-3xl font-semibold",
    },
  },
  domain4: {
    name: "Domain 4",
    primary: "#dc2626", // red-600
    secondary: "#b91c1c", // red-700
    text: "#000000",
    textLight: "#4b5563",
    bg: "#ffffff",
    bgLight: "#f9fafb",
    border: "#e5e7eb",
    borderLight: "#f3f4f6",
    gradient: {
      from: "#dc2626",
      to: "#b91c1c",
    },
    hover: {
      primary: "#b91c1c",
      secondary: "#991b1b",
    },
    focus: "#dc2626",
    heading: {
      h1: "text-4xl md:text-5xl font-bold",
      h2: "text-3xl md:text-4xl font-semibold",
      h3: "text-2xl md:text-3xl font-semibold",
    },
  },
  domain5: {
    name: "Domain 5",
    primary: "#0891b2", // cyan-600
    secondary: "#0e7490", // cyan-700
    text: "#000000",
    textLight: "#4b5563",
    bg: "#ffffff",
    bgLight: "#f9fafb",
    border: "#e5e7eb",
    borderLight: "#f3f4f6",
    gradient: {
      from: "#0891b2",
      to: "#0e7490",
    },
    hover: {
      primary: "#0e7490",
      secondary: "#155e75",
    },
    focus: "#0891b2",
    heading: {
      h1: "text-4xl md:text-5xl font-bold",
      h2: "text-3xl md:text-4xl font-semibold",
      h3: "text-2xl md:text-3xl font-semibold",
    },
  },
  domain6: {
    name: "Domain 6",
    primary: "#b45309", // amber-700
    secondary: "#92400e", // amber-800
    text: "#000000",
    textLight: "#4b5563",
    bg: "#ffffff",
    bgLight: "#f9fafb",
    border: "#e5e7eb",
    borderLight: "#f3f4f6",
    gradient: {
      from: "#b45309",
      to: "#92400e",
    },
    hover: {
      primary: "#92400e",
      secondary: "#78350f",
    },
    focus: "#b45309",
    heading: {
      h1: "text-4xl md:text-5xl font-bold",
      h2: "text-3xl md:text-4xl font-semibold",
      h3: "text-2xl md:text-3xl font-semibold",
    },
  },
  domain7: {
    name: "Domain 7",
    primary: "#7c3aed", // violet-600
    secondary: "#6d28d9", // violet-700
    text: "#000000",
    textLight: "#4b5563",
    bg: "#ffffff",
    bgLight: "#f9fafb",
    border: "#e5e7eb",
    borderLight: "#f3f4f6",
    gradient: {
      from: "#7c3aed",
      to: "#6d28d9",
    },
    hover: {
      primary: "#6d28d9",
      secondary: "#5b21b6",
    },
    focus: "#7c3aed",
    heading: {
      h1: "text-4xl md:text-5xl font-bold",
      h2: "text-3xl md:text-4xl font-semibold",
      h3: "text-2xl md:text-3xl font-semibold",
    },
  },
  domain8: {
    name: "Domain 8",
    primary: "#0d9488", // teal-600
    secondary: "#0f766e", // teal-700
    text: "#000000",
    textLight: "#4b5563",
    bg: "#ffffff",
    bgLight: "#f9fafb",
    border: "#e5e7eb",
    borderLight: "#f3f4f6",
    gradient: {
      from: "#0d9488",
      to: "#0f766e",
    },
    hover: {
      primary: "#0f766e",
      secondary: "#115e59",
    },
    focus: "#0d9488",
    heading: {
      h1: "text-4xl md:text-5xl font-bold",
      h2: "text-3xl md:text-4xl font-semibold",
      h3: "text-2xl md:text-3xl font-semibold",
    },
  },
  domain9: {
    name: "Domain 9",
    primary: "#d97706", // yellow-600
    secondary: "#b45309", // yellow-700
    text: "#000000",
    textLight: "#4b5563",
    bg: "#ffffff",
    bgLight: "#f9fafb",
    border: "#e5e7eb",
    borderLight: "#f3f4f6",
    gradient: {
      from: "#d97706",
      to: "#b45309",
    },
    hover: {
      primary: "#b45309",
      secondary: "#92400e",
    },
    focus: "#d97706",
    heading: {
      h1: "text-4xl md:text-5xl font-bold",
      h2: "text-3xl md:text-4xl font-semibold",
      h3: "text-2xl md:text-3xl font-semibold",
    },
  },
  domain10: {
    name: "Domain 10",
    primary: "#4f46e5", // indigo-600
    secondary: "#4338ca", // indigo-700
    text: "#000000",
    textLight: "#4b5563",
    bg: "#ffffff",
    bgLight: "#f9fafb",
    border: "#e5e7eb",
    borderLight: "#f3f4f6",
    gradient: {
      from: "#4f46e5",
      to: "#4338ca",
    },
    hover: {
      primary: "#4338ca",
      secondary: "#3730a3",
    },
    focus: "#4f46e5",
    heading: {
      h1: "text-4xl md:text-5xl font-bold",
      h2: "text-3xl md:text-4xl font-semibold",
      h3: "text-2xl md:text-3xl font-semibold",
    },
  },
};