import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.metadata.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.metadata.description,
  keywords: siteConfig.metadata.keywords,
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL(siteConfig.metadata.url),
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    url: siteConfig.metadata.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && supportDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
