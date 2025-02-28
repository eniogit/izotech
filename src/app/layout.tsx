import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { interFont } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interFont.variable}`}>
      <head>
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js" /> */}
        <meta name="theme-color" content="#fdc700"/>
      </head>
      <body className={`antialiased font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
