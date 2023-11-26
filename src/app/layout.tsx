import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Header from "@/components/header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import Popup from "@/components/popup/Popup";
import "./global.css";

import "@/styles/app.scss";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ThemeProvider>
        {/* <Popup /> */}
          <div className="container">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
