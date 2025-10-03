import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { ReactQueryProvider } from "@/providers";

export const metadata: Metadata = {
  title: "Trello Clone",
  description: "Trello Clone build with Next.js and Tailwind.css",
  viewport: {
    width: "device-width",
    initialScale: 1.0,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark bg-gray-900">
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
