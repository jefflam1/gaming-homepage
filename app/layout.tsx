import './globals.css'
import "antd/dist/reset.css";
import { Inter } from 'next/font/google'
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page",
  description: "Next Generation Get Your Desierd Rank Now",
};

const bebasNeue = localFont({
  src: "./font/BebasNeue-Regular.ttf",
  display: "swap",
  variable: "--bebasNeue",
});

const poppins = localFont({
  src: "./font/Poppins-Regular.ttf",
  display: "swap",
  variable: "--poppins",
});

const nunito = localFont({
  src: "./font/Nunito-ExtraLight.ttf",
  display: "swap",
  variable: "--nunito",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${poppins.variable} ${nunito.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
