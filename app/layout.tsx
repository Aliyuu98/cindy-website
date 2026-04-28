import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Luminaconexiones",
  description: "Your gateway to curated services, expert insights, and better decision-making.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
