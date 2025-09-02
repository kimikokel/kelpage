import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "kel's page",
  description: "Ultimate guide to understand kel ;)",
  icons: {
    icon: "@/public/pp2.ico",
    shortcut: "@/public/pp2.ico",
    apple: "@/public/pp2.jpg",
    other: {
      rel: "pp2",
      url: "@/public/pp2.jpg",
      type: "image/jpg",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
