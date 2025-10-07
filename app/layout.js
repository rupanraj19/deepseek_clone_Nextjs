import { Inter } from "next/font/google";
import "./globals.css";
import "./prism.css"
import { ClerkProvider } from "@clerk/nextjs";
import {  AppContextProvider } from "@/context/AppContext";
import { Toaster } from 'react-hot-toast';
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
        <body className={`${inter.className} antialiased`}>
          <Toaster toastOptions={
            {
              success: {style:{background:'black',color:'white'}},
              error:{style:{background:'black', color:'white'}}
            }
          } />
          {children}
        </body>
      </html>
      </AppContextProvider>
    </ClerkProvider>

  );
}
