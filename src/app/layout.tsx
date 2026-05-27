import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Plated Cafe | Restaurant | Bar — Point Lonsdale",
  description:
    "Plated Cafe in Point Lonsdale offers fresh, locally sourced food, specialty coffee, and a relaxed coastal vibe. Perfect for breakfast, brunch, and casual dining on the beach front.",
  icons: { icon: "/assets/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
