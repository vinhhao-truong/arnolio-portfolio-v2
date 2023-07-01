import "../styles/globals.scss";
import { Inter, Encode_Sans } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PageContainer from "@/components/layout/PageContainer";
import Provider from "@/redux/Provider";
import GeneralLayout from "@/components/layout/GeneralLayout";
import { Metadata } from "next";

const inter = Encode_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arnolio",
  description:
    "Arnold Truong's portfolio, showcasing profile, experiences and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <head>
        {/* light logo */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/arnolio-logo-light/apple-touch-icon.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/arnolio-logo-light/favicon-32x32.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/arnolio-logo-light/favicon-16x16.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="manifest"
          href="/arnolio-logo-light/site.webmanifest"
          media="(prefers-color-scheme: light)"
        />
        {/* dark logo */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/arnolio-logo-dark/apple-touch-icon.png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/arnolio-logo-dark/favicon-32x32.png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/arnolio-logo-dark/favicon-16x16.png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="manifest"
          href="/arnolio-logo-dark/site.webmanifest"
          media="(prefers-color-scheme: dark)"
        />
        {/* overscroll
        <meta
          name="theme-color"
          content="#F9F9F9"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1F2B37"
          media="(prefers-color-scheme: dark)"
        /> */}
        <meta id="overscroll-theme" name="theme-color" content="#F9F9F9" />
      </head>
      <body
        className={`${inter.className} bg-system-white dark:bg-system-navy text-system-navy dark:text-system-white`}
      >
        <Provider>
          <GeneralLayout>
            <Navigation />
            {children}
            <Footer />
          </GeneralLayout>
        </Provider>
      </body>
    </html>
  );
}
