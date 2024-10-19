import Nav from "./ui/old-header"
import './stylesheets/globals.css';
import type { Metadata } from 'next';
import { Red_Hat_Text } from 'next/font/google';
import Header from './ui/header';

const redHatText = Red_Hat_Text({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={redHatText.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
