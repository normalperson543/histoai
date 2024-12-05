import Link from 'next/link';
import { auth } from '@/auth';
import { findAllPatients } from '@/app/lib/data';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patients"
};
export default async function PatientDataPage() {
  const patients = await findAllPatients();
  return (
    <main>
      <h2 className='text-3xl pt-10 ml-5'>Registered Patients</h2>
      <ul className='block w-[50%] ml-5 mt-10 divide-y divide-hblue/[0.25] border-y border-hblue-light/[0.5] shadow-lg'>
        <li className='p-1 bg-hblue-light/[0.2] px-2'>
          <div className='flex col-2'>
            <p className='text-left w-[50%]'>Patient Name</p>
            <p className='text-right w-[50%]'>Date Added</p>
          </div>
        </li>  
          
        {patients.map((obj: {
            id: string;
            dateCreated: Date;
            firstName: string;
            middleName: string | null;
            lastName: string;
            dateOfBirth: Date;
            sex: string;
            assignedUser: string;
        }) => {
          return(
            <li key={obj.id} className='px-3 py-1 hover:bg-hblue/[0.1]'>
              <Link href={`/dashboard/patients/${obj.id}`}>
                <div className='flex col-2'>
                  <p className='text-left w-[50%]'>{obj.firstName} {obj.middleName && `${obj.middleName.substring(0,1)}.`} {obj.lastName}</p>
                  <p className='text-right w-[50%]'>{obj.dateCreated.toLocaleDateString()}</p>
                </div>
              </Link>
                
            </li>
          )
        })}
      </ul>
      <div className='relative w-[50%] ml-5'>
        <Link href="/dashboard/patients/new">
          <button className='border rounded-md shadow-lg bg-hblue-light/[0.4] px-1 absolute top-5 right-0'>Add Patient</button>
        </Link>
      </div>
    </main>
  );
}