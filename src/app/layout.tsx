import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Organisation Structure",
  description: "Team organisation structure, skills, and delivery capabilities.",
  openGraph: {
    title: "Team Organisation Structure",
    description: "Explore the delivery team, skills, and delivery capabilities.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
