import '../stylesheets/globals.css';
import '../stylesheets/homePage.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Hello this is the home page</h1>
      <Link href="/">Home</Link>
      <Link href="/#/pages/uploadPage">Upload Page </Link>
      <Link href="/#/pages/reportPage">Report Page </Link>
      <Link href="/#/pages/patientDataPage">Patient Data Page </Link>
    </main>
  );
}
