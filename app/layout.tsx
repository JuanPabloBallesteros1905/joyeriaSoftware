import type { Metadata } from "next";
import { Cinzel, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Cinzel({
  
  subsets: ["latin"],
});
 

export const metadata: Metadata = {
  title: "Joyeria Italiana",
  description: "Landing page de Joyeria Italiana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
