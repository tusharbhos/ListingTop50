import { headers } from "next/headers";
import { themes, getThemeCSS } from "./config/theme";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const host = (await headers()).get("host") || "";
  const domain = host.replace("www.", "");

  const theme = themes[domain] || themes["default"];
  const themeCSS = getThemeCSS(theme);

  return (
    <html lang="en">
      <head>
        <title>{theme.name}</title>
        <meta name="theme-color" content={theme.primary} />
      </head>
      <body style={themeCSS}>
        {children}
      </body>
    </html>
  );
}