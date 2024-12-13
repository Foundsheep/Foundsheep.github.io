import type { Metadata } from "next";
import { Afacad, Noto_Sans_KR, Cormorant, Crimson_Pro } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import { NavBar } from "@/components/nav";
import { GoogleAnalytics } from "@next/third-parties/google";

// const inter = Roboto({ subsets: ["latin"], weight: ["300"] });

const afacad = Afacad({
  subsets: ["latin"],
  variable: '--font-afacad'
})

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant"
})

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: '--font-noto-sans-kr'
})

const crimson_pro = Crimson_Pro({
  subsets: ["latin"],
  variable: '--font-crimson-pro'
})

export const metadata: Metadata = {
  title: "Love wins eventually",
  description: "DJ's dev playground like that of childhood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={crimson_pro.className}>
      <GoogleAnalytics gaId="G-PVP71LJRLC" />
      <body className="antialiased min-h-screen min-w-fit flex flex-col items-center">
        <main className="w-full pt-10 pb-80 px-8 max-w-4xl min-h-[1920px]">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
