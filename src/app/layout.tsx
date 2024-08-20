import type { Metadata } from "next";
import { Inter_Tight as Inter } from "next/font/google";
import "./globals.css";
import NavbarDesktop from './components/NavbarDesktop';
import Footer from './components/Footer';
import NavbarMobile from './components/NavbarMobile';
import ScrollToTopBtn from '../components/ScrollToTopBtn';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerakan Infaq Beras Tasikmalaya",
  description: "Gerakan Infaq Beras Tasikmalaya",
  openGraph: {
    title: 'Gerakan Infaq Beras Tasikmalaya',
    description: 'Bantu Yatim & Penghafal Qur\'an bersama Gerakan Infaq Beras Gerakan Infaq Beras Tasikmalaya',
    url: 'https://gib-tasikmalaya.vercel.app',
    siteName: 'Gerakan Infaq Beras Tasikmalaya',
    images: [
      {
        url: 'https://gib-tasikmalaya.vercel.app/images/opengraph.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.className} overflow-x-hidden`}>
        <header>
          <NavbarMobile />
          <NavbarDesktop />
        </header>
        <main className='flex flex-col gap-4 w-full max-w-5xl mx-auto'>
          {children}
          <ScrollToTopBtn />
        </main>
        <Footer />
      </body>
    </html>
  );
}
