import { headers } from "next/headers";
import { themes } from "./config/theme";
import { ThemeProvider } from "../app/context/ThemeContext";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const host = (await headers()).get("host") || "";
  const domain = host.replace("www.", "");
  const theme = themes[domain] || themes["default"];

  return (
    <html lang="en">
      <body
        style={
          {
            "--primary": theme.primary,
            "--secondary": theme.secondary,
            "--text": theme.text,
            "--text-light": theme.textLight,
            "--bg": theme.bg,
            "--bg-light": theme.bgLight,
            "--border": theme.border,
            "--border-light": theme.borderLight,
            "--gradient-from": theme.gradient.from,
            "--gradient-to": theme.gradient.to,
            "--hover-primary": theme.hover.primary,
            "--hover-secondary": theme.hover.secondary,
            "--focus": theme.focus,
          } as React.CSSProperties
        }
      >
        <title>{theme.name}</title>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}