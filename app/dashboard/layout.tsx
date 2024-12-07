import Sidebar from '@/app/ui/sidebar';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-full w-full flex-nowrap'>
        <Suspense>
            <Sidebar/>
        </Suspense>
        <div className='w-full ml-[20%] mt-12'>
        {children}
        </div>
    </div>  
  );
}
