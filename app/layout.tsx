import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab({
  display: "auto",
  subsets: ["latin"],
  weight: ["900", "700", "600", "300"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Tosha Patel | Full Stack Developer",
  description: "This is my personal portfolio website. I am a Full Stack Developer or Frontend Developer. I love to build web applications and mobile applications.",
  keywords: ["Full Stack Developer", "Frontend Developer", "React JS Developer", "React Native Developer", "Software Developer", "Portfolio", "Tosha Patel"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased bg-gray-950 text-textLight`}
      >
        <div>
          <Toaster />
        </div>
        {children}
      </body>
    </html>
);
}
