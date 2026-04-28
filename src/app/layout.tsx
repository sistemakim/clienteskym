import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FormbricksProvider from "@/components/FormBricks/FormBricksProvider";
import { Suspense } from 'react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clientes HCE",
  description: "Consulta tu cuenta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Suspense>
        <FormbricksProvider/>
      </Suspense>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
