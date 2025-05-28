'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from '../context/CartContext';
import { usePathname } from 'next/navigation'; // Import usePathname

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current path

  // Define the path where you don't want the header/footer to show
  const hideHeaderFooter = pathname === '/LastForm'; // Assuming '/lastform' is the path to your Lastform page

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          {!hideHeaderFooter && <Header />} {/* Conditionally render Header */}
          {children}
          {!hideHeaderFooter && <Footer />} {/* Conditionally render Footer */}
        </CartProvider>
      </body>
    </html>
  );
}