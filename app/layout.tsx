import { headers } from "next/headers";
import { themes } from "./config/theme";
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
            "--bg": theme.bg,
            "--border": theme.border,
          } as React.CSSProperties
        }
      >
        <title>{theme.name}</title>
        {children}
      </body>
    </html>
  );
}
