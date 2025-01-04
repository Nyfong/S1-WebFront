import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/common/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="box-border	 p-0 m-0">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
