import type { Metadata } from "next";
import { raleway } from "@/config";
import "./globals.css";
import Link from "next/link";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
  title: "4lphab3t",
  description: "Aprende y repasa la pronunciación de las letras del alfabeto.",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="es" className={raleway.variable}>
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Header />

        <div className="flex flex-auto flex-col mx-auto max-w-5xl w-full">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
