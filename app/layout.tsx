import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const riftSoft = localFont({
  src: [
    {
      path: "../public/fonts/rift-soft/Rift Soft Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/rift-soft/Rift Soft Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/rift-soft/Rift Soft Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/rift-soft/Rift Soft Bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-rift-soft",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beyondr-world.vercel.app"),

  title: "EXPLORE",
  description: "BEYONDR",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    images: ["/logo.png"],
  },

  twitter: {
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${riftSoft.variable} h-full antialiased`}>
      <head>
        <link rel="preload" href="/images/noise.png" as="image" />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
