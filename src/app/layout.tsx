import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/navbar";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import es_Es from 'antd/locale/es_ES';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clientes KYM",
  description: "Consulta tu cuenta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <ConfigProvider locale={es_Es}>
        <body className={inter.className}>
          <Navbar />
          <AntdRegistry>{children}</AntdRegistry>
          <Analytics/>
          <SpeedInsights/>
        </body>
      </ConfigProvider>
    </html>
  );
}
