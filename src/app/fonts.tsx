import { Inter } from "next/font/google";

export const interFont = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});
