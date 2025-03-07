import './stylesheets/globals.css';
import type { Metadata } from 'next';
import { Red_Hat_Text } from 'next/font/google';
import Header from './ui/header';
const redHatText = Red_Hat_Text({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: "%s | The OSCC Project",
    default: "The OSCC Project"
  },
  description: 'The revolution in cancer detection. Making AI and OSCC detection available to everyone.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${redHatText.className} h-screen w-screen overflow-x-hidden`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
