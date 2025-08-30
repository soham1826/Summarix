import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/comman/Header";
import Footer from "@/components/comman/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { CheckCircle, CrossIcon } from "lucide-react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summarix",
  description: "AI app for summary generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="relative flex min-h-screen flex-col">
            <Toaster
              position="top-center"
              icons={{
                success: <CheckCircle className="text-green-500 my-4" />,
                error: <CrossIcon className="text-red-600 my-4" />,
              }}
            />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
