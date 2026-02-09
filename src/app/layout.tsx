import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thamani Sacco | Excellence & Value",
  description: "A premier financial institution providing savings and loan solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white antialiased`}>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow pt-[116px] lg:pt-[132px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}