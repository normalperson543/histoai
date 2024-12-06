import Link from 'next/link';
import Carousel from '../ui/carousel';
import { findPatientsUnderUser, findPatientReportsUnderUser, fetchUser } from '../lib/data';
import { auth } from '@/auth';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard"
};
export default async function Home() { 
  const session = await auth();
  const recentReports = await findPatientReportsUnderUser(session?.user?.id as string, 0, 5)
  const recentPatients = await findPatientsUnderUser(session?.user?.id as string, 0, 5);
  const userInfo = await fetchUser(session?.user?.id as string);
  return (
    <main>
      <h1 className='text-3xl pt-10 ml-5'>Welcome, {userInfo?.firstName}</h1>
      <div className='flex flex-row w-[100%] mt-10 text-4xl'>
        <h1 className='mx-auto'>Recent Uploads</h1>
        <h1 className='mx-auto'>Recent Patients</h1>
      </div>
      <div className='flex flex-row'>
        <div className='w-[40%] mx-auto border-2 border-hblue rounded-2xl shadow-lg'>
          <Carousel slides={recentReports} carouselType={"images"}/>
        </div>
        <div className='w-[40%] mx-auto bg-clip-content bg-hblue rounded-2xl shadow-lg'>
          <Carousel slides={recentPatients} carouselType={"patients"}/>
        </div>
      </div>
    </main>
  );
}