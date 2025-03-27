import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "The Cozy Paws 🐾",
  description: "A minimal e-commerce website.",
};

const myFont = localFont({ src: "./my-font.ttf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} bg-slate-50 md:flex md:items-center md:justify-center`}
      >
        <div className="max-w-5xl">{children}</div>
      </body>
    </html>
  );
}
