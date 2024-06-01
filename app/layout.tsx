import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import NavbarPage from "@/components/navbar/NavbarPage";

const captionfont = localFont({src : '../public/image/Fonts/Jost-Medium.ttf'})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login with nextJs",
  description: "LOgin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={captionfont.className}>
        {/* <NavbarPage /> */}
        {children}
      </body>
    </html>
  );
}
