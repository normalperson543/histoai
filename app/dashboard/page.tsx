import Link from 'next/link';

export default function Home() {
  
  return (
    <main>
      <h1>Hello this is the home page</h1>
      <Link href="/">Home</Link>
      <Link href="/reports/upload">Upload Page </Link>
      <Link href="/reports">Report Page </Link>
      <Link href="/patients">Patient Data Page </Link>
    </main>
  );
}
