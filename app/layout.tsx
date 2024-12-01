import Link from "next/link";
import Image from "next/image";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gigglebyte",
  description: "Generated jokes using Together.ai API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto py-4">
            <h1 className="text-center text-2xl font-bold">Gigglebyte</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto py-8">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-gray-600">
              Powered by{" "}
              <Link href="https://together.ai" target="_blank" className="underline">
                Together.ai
              </Link>
            </div>
            <Link
              href="https://github.com/carvajal/gigglebyte"
              target="_blank"
              className="flex gap-x-2 items-center space-x-2 text-gray-600 underline"
            >
              <Image
                src="/github-mark.svg"
                alt="GitHub Logo"
                width={20}
                height={20}
              />
              GitHub
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}