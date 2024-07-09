import { Outfit } from "next/font/google";
import "./globals.css";

// Componentes
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Theme Provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Yash Goyal - Portfolio Website",
  description: "Portfolio of Yash Goyal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
