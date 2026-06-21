"use client"; // 👈 السطر الأهم لحل مشكلة الـ null في الـ Layout

import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-[#050816] antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}