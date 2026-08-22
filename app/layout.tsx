import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://barbell.website"),
  title: "Barbell Bro — штанга без границ",
  description: "Полиуретановый наконечник для безопасных и удобных тренировок со штангой в любом месте.",
  openGraph: { title: "Barbell Bro — штанга без границ", description: "Мобильная landmine-тренировка в любом месте.", type: "website", locale: "ru_RU", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Barbell Bro — штанга без границ" }] },
  twitter: { card: "summary_large_image", title: "Barbell Bro — штанга без границ", description: "Мобильная landmine-тренировка в любом месте.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
