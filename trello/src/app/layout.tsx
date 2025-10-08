import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ReactQueryProvider } from "@/providers";

export const metadata: Metadata = {
  title: "Trello Clone",
  description: "Trello Clone build with Next.js and Tailwind.css",
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1.0,
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="dark bg-gray-900 h-full">
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
