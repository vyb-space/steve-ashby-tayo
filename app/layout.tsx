import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tayo — Filipino Condiments",
  description:
    "Premium artisan Filipino condiments. Coconut vinegar, adobo sauce, banana ketchup — bottled in the spirit of the Philippines.",
  openGraph: {
    title: "Tayo — Filipino Condiments",
    description: "Soul-awakening flavours from the Philippines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
