import { Theme, ThemePanel, Flex } from "@radix-ui/themes";
import "./globals.css";
// import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";

import Header from "@/components/Header";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en" suppressHydrationWarning>
      <body className={` relative h-full ${GeistSans.variable}`}>
        <Theme className={`h-full ${GeistSans.variable} `}>
          <Flex className="min-h-full " direction={"column"} gap={"3"}>
            <Header />
            {children}
          </Flex>
        </Theme>
      </body>
    </html>
  );
}
