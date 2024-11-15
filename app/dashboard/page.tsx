import Link from 'next/link';
import Carousel from '../ui/carousel';
import { findPatientsUnderUser, findPatientReportsUnderUser } from '../lib/data';
import { auth } from '@/auth';



export default async function Home() {
  const session = await auth();
  const recentReports = await findPatientReportsUnderUser(session?.user?.id as string, 0, 5)
  const recentPatients = await findPatientsUnderUser(session?.user?.id as string, 0, 5);
  console.log(recentPatients);
  return (
    <main>
      <div className='flex flex-row w-[100%] mt-10 text-4xl'>
        <h1 className='mx-auto'>Recent Uploads</h1>
        <h1 className='mx-auto'>Recent Patients</h1>
      </div>
      <div className='flex flex-row'>
        <div className='w-[40%] mx-auto'>
          <Carousel slides={recentReports} carouselType={"images"}/>
        </div>
        <div className='w-[40%] mx-auto bg-clip-content'>
          <Carousel slides={recentPatients} carouselType={"patients"}/>
        </div>
      </div>
    </main>
  );
}