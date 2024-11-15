import Link from 'next/link';
import { auth } from '@/auth';
import { findAllPatients } from '@/app/lib/data';
export default async function PatientDataPage() {
  const patients = await findAllPatients(0, 20);
  return (
    <main>
      <h2 className='text-3xl pt-10'>Registered Patients</h2>
      <ul className='block w-[50%] mx-auto mt-10 divide-y divide-hblue/[0.25] border-y border-hblue-light/[0.5] shadow-lg'>
        <li className='p-1 bg-hblue-light/[0.2] px-2'>
          <div className='flex col-2'>
            <p className='text-left w-[50%]'>Patient Name</p>
            <p className='text-right w-[50%]'>Date Added</p>
          </div>
        </li>  
          
        {patients.map(obj => {
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
      <div className='relative'>
        <Link href="/dashboard/patients/new">
          <button className='border rounded-md shadow-lg bg-hblue-light/[0.4] px-1 absolute top-5 right-[25%]'>Add Patient</button>
        </Link>
      </div>
    </main>
  );
}