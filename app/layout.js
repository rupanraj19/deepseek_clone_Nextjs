import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContext, AppContextProvider } from "@/context/AppContext";

// font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeepSeek-Clone", // web title
  description: "Full Stack Project", // web description
};

export default function RootLayout({ children }) {
  return (
    // clear and app context provider is for authentication
    <ClerkProvider>
      <AppContextProvider>
      <html lang="en">
        <body
          className={`${inter.className} antialiased`}
        >
          {children}
        </body>
      </html>
      </AppContextProvider>
    </ClerkProvider>

  );
}
