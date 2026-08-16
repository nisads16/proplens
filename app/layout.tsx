import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PropLens AI",
  description: "Singapore property decision intelligence workspace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
