import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers"; // Provider'ları ayrı dosyada topluyoruz (client component)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kur Takip",
  description: "Anlık döviz kuru takibi uygulaması",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
