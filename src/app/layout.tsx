import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Link from "next/link";
import InsertHeader from "../components/InsertHeader";
import InsertFooter from "../components/InsertFooter";
import BurgerMenu from "../components/BurgerMenu";
import MailLink from "../components/MailLink";

export const metadata: Metadata = {
  title: "Fararjeh: Competitor, Coach, Content Creator",
  description: "Fararjeh is a content creator, competitor, and coach for the game Street Fighter 6. Learn everything about him, from his results and achievements to his content and gallery, here!",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" } 
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Fararjeh",
  },
  alternates: {
    canonical: 'https://fararjeh-fgc.com/',
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>){

  return (
    <html lang="en">
      <body className="min-h-screen">
        <BurgerMenu/>
        <InsertHeader/>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
          <aside className="fixed h-screen hidden lg:flex flex-col lg:max-w-[15%] justify-center items-center">
            <nav className="flex flex-col gap-8 mb-[15rem] ml-20">
              <Link id="sidebar" href="/">About</Link>
              <Link id="sidebar" href="/#achievements">Achievements</Link>
              <Link id="sidebar" href="/#coaching">Coaching</Link>
              <Link id="sidebar" href="/#content">Content</Link>
              <Link id="sidebar" href="/#gallery">Gallery</Link>
              <MailLink email="fararenough@gmail.com">Business Enquiries</MailLink>
            </nav>
          </aside>
        </div>

        <div className="col-span-1">{children}</div>

        <div>
          <div id="backgroundL">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} style={{ left: `${18 * (i + 1)}%` }}></span>
            ))}
          </div>
          <div id="backgroundR">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} style={{ right: `${18 * (i + 1)}%` }}></span>
            ))}
          </div>
        </div>

        <InsertFooter/>

        <Analytics />
      </body>
    </html>
  );
}
