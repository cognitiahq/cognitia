import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cognitia | Learn Beyond Limits",
  description:
    "An intelligent learning ecosystem for learners, educators, schools and organisations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}