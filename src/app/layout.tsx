import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js" /> */}
      </head>
      <body className={`antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
