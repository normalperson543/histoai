import './stylesheets/globals.css';
import type { Metadata } from 'next';
import { Red_Hat_Text } from 'next/font/google';
import Header from './ui/header';
import Sidebar from './ui/sidebar';
import { Suspense } from 'react';
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
      <body className='h-screen w-screen overflow-x-hidden'>
        <Header/>
        <div className='flex h-full w-full flex-nowrap'>
          <Suspense>
            <Sidebar/>
          </Suspense>
          <div className='w-full'>
            {children}
          </div>
        </div>
      </body>
    </html>
    

  );
}
