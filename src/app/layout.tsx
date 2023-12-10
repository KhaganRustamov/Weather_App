import { Provider } from "react-redux";
import { Nunito } from "next/font/google";
import type { Metadata } from "next";

import { store } from "@/redux/store";
import Header from "@/components/header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
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
        <Provider store={store}>
          <ThemeProvider>
            <div className="container">
              <Header />
              {children}
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
