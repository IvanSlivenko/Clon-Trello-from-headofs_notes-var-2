import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trello Clone",
  description: "Trello Clone build with Next.js and Tailwind.css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">{children}</body>
    </html>
  );
}
