import './stylesheets/globals.css';
import type { Metadata } from 'next';
import { Red_Hat_Text } from 'next/font/google';
import Header from './ui/header';
import SideBar from './ui/sidebar';

const redHatText = Red_Hat_Text({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: "%s | histoAI",
    default: "histoAI"
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
      <body className={redHatText.className}>
        <Header />
        
        {children}
      </body>
    </html>
    
  );
}
