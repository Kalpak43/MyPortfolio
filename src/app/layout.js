import ThemeProvider from "@/contexts/ThemeProvider";
import Sidebar from "@/components/Sidebar/Sidebar";
import "./globals.css";

export const metadata = {
  title: "KP's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="noto-sans-fam">
        <ThemeProvider>
          <div className="layout">
            <Sidebar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
