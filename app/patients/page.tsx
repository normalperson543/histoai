"use client";
import Link from 'next/link';
import { useState } from 'react';
import AddPatient from '../ui/addPatient';
export default function PatientDataPage() {
    const [addNewPatient, setAddNewPatient] = useState(false);
    return (
      <main>
        <h1 className='text-center text-5xl pt-10'>Registered Patients</h1>
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
                <Link href={`/patients/${obj.id}`}>
                  <div className='flex col-2'>
                    <p className='text-left w-[50%]'>{obj.firstName} {obj.middleName && `${obj.middleName.substring(0,1)}.`} {obj.lastName}</p>
                    <p className='text-right w-[50%]'>{obj.dateCreated.toLocaleDateString()}</p>
                  </div>
                </Link>
                  
              </li>
            )
          })}
        </ul>
        {addNewPatient ? (
          <div className='relative'>
            <button onClick={() => setAddNewPatient(!addNewPatient)} className='border rounded-md shadow-lg bg-hblue-light/[0.4] px-1 absolute top-5 right-[25%]'>Undo</button>
            <div className='inline-block w-[50%] absolute top-16 inset-x-[25%]'>
              <AddPatient/>
            </div>
          </div>
        ) : (
          <div className='relative'>
            <button onClick={() => setAddNewPatient(!addNewPatient)} className='border rounded-md shadow-lg bg-hblue-light/[0.4] px-1 absolute top-5 right-[25%]'>Add Patient</button>
          </div>
        )}
      </main>
    );
  }

const patients = [
  {
    id: 0,
    dateCreated: new Date(2024, 9, 25),
    firstName: "Rayyan",
    middleName: "Midhat Abdul",
    lastName: "Khalique",
    dateOfBirth: new Date(2009, 3, 3),
    sex: "male"
  },{
    id: 1,
    dateCreated: new Date(2024, 8, 30),
    firstName: "Dylan",
    middleName: "Bhavesh",
    lastName: "Patel",
    dateOfBirth: new Date(2009, 2, 3),
    sex: "male"
  },{
    id: 2,
    dateCreated: new Date(2024, 9, 31),
    firstName: "Trevon",
    middleName: null,
    lastName: "Nguyen",
    dateOfBirth: new Date(2009, 5, 20),
    sex: "male"
  }
]