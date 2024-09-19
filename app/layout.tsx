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
      <body className="${inter.className} antialiased min-h-screen min-w-fit flex flex-col items-center">
        <main className="w-full pt-10 pb-80 px-8 max-w-3xl min-h-[1920px]">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
