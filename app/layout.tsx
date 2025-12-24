import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/convex";

const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chainlink Feed API",
  description: "Always be Shipping 🚢",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansMono.className} antialiased`}>
        <main className="flex min-h-screen place-content-center pt-4">
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </main>
      </body>
    </html>
  );
}
