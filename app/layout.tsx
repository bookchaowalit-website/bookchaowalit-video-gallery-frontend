import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Screening Room | Bookchaowalit",
  description: "A local catalog of curated demo video cards.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
