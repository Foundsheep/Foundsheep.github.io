import type { Metadata } from "next";
import { Afacad, Noto_Sans_KR } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import { NavBar } from "@/components/nav";

// const inter = Roboto({ subsets: ["latin"], weight: ["300"] });

const afacad = Afacad({
  subsets: ["latin"],
  variable: '--font-afacad'
})

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: '--font-noto-sans-kr'
})


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
    <html lang="en" className={afacad.className}>
      <body className="antialiased min-h-screen min-w-fit flex flex-col items-center">
        <main className="w-full pt-10 pb-80 px-8 max-w-3xl min-h-[1920px]">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
