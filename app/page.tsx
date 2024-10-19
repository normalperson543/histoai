import Link from 'next/link';
'use client';

export default function page() {
  return (
    <main>
      <div className='container mx-auto px-4'>
        <h1>Hello this is the home page</h1>
        <p>This is content to make the page longer</p>
        <div className='w-full h-screen bg-green-300'></div>
        <p>Dummy text</p>
      </div>
    </main>
  );
}
