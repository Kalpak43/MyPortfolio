import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import ThemeProvider from "@/contexts/ThemeProvider";
import Script from "next/script";

export const metadata = {
  title: "KP's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <main className="layout">
            <Sidebar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
