import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import { StoreProvider } from "@/redux/ui";
import Header from "@/components/header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import "./global.css";
import "@/styles/app.scss";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Forecast",
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
          <StoreProvider>
            <div className="container">
              <Header />
              {children}
            </div>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
