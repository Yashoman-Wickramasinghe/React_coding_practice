import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function Header(){

  return(
    <header class="bg-slate-500 py-4">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">Snowtooth Mountain</Link>
          </div>
          <div>
            <Link href="/mountain">Mountain Info</Link>
          </div>
          <div>
            <Link href="/hotels">Hotel Info</Link>
          </div>
          <div>
            <Link href="/contact">Contact Info</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Header/>
        {children}
      </body>
    </html>
  );
}
