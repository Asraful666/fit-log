import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PlanProvider } from "../context/PlanContext";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PlanProvider>

          <Navbar />

          {children}

          <Footer />

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 2500,
            }}
          />

        </PlanProvider>
      </body>
    </html>
  );
}