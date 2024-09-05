import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DJMoon",
  description: "Records of the precious days lived by DJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="${inter.className} antialiased max-w-3xl mt-8 mb-80 mx-8 lg:mx-auto">
        <main className="flex-auto">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
