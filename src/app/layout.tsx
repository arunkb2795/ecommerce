import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { WixClientContextProvider } from "@/context/wix-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jappz the web wizard Ecommerce-NextJS application",
  description: "Ecommerce-NextJS application with headless cms as wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
          <Navbar />
          {children}
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
