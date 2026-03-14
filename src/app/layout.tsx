import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cliberai.com"),
  title: "Cliber AI — Intelligence, Specialized",
  description:
    "We build AI systems that master specific domains. Our tools don't just assist — they understand the rules, the context, and the stakes.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Cliber AI — Intelligence, Specialized",
    description:
      "We build AI systems that master specific domains. Our tools don't just assist — they understand the rules, the context, and the stakes.",
    url: "https://cliberai.com",
    siteName: "Cliber AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliber AI — Intelligence, Specialized",
    description:
      "We build AI systems that master specific domains. Our tools don't just assist — they understand the rules, the context, and the stakes.",
  },
  alternates: {
    canonical: "https://cliberai.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
