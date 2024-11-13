"use client";
import { useState } from 'react';
import Link from 'next/link';
import AddReport from '../ui/addReport';
export default function ReportPage() {
    const [addNewReport, setAddNewReport] = useState(false);
    return (
      <main>
        <h1 className='text-center text-5xl pt-10'>Registered Reports</h1>
        <ul className='block w-[50%] mx-auto mt-10 divide-y divide-hblue/[0.25] border-y border-hblue-light/[0.5] shadow-lg'>
          <li className='p-1 bg-hblue-light/[0.2] px-2'>
            <div className='flex col-2'>
              <p className='text-left w-[50%]'>Patient Name</p>
              <p className='text-right w-[50%]'>Date Added</p>
            </div>
          </li>  
            
          {reports.map(obj => {
            const patient = patients.find(patient => patient.id === obj.patientId);
            return(
              <li key={obj.id} className='px-3 py-1 hover:bg-hblue/[0.1]'>
                <Link href={`/reports/${obj.id}`}>
                  <div className='flex col-2'>
                    <p className='text-left w-[50%]'>{patient.firstName} {patient.middleName && `${patient.middleName.substring(0,1)}.`} {patient.lastName}</p>
                    <p className='text-right w-[50%]'>{obj.dateCreated.toLocaleDateString()}</p>
                  </div>
                </Link>
                  
              </li>
            )
          })}
        </ul>
        {addNewReport ? (
          <div className='relative'>
            <button onClick={() => setAddNewReport(!addNewReport)} className='border rounded-md shadow-lg bg-hblue-light/[0.4] px-1 absolute top-5 right-[25%]'>Undo</button>
            <div className='inline-block w-[50%] absolute top-16 inset-x-[25%]'>
              <AddReport patients={patients}/>
            </div>
          </div>
        ) : (
          <div className='relative'>
            <button onClick={() => setAddNewReport(!addNewReport)} className='border rounded-md shadow-lg bg-hblue-light/[0.4] px-1 absolute top-5 right-[25%]'>Add Report</button>
          </div>
        )}
      </main>
    );
  }

  const reports = [
    {id: "0", dateCreated: new Date(2024, 0, 8), patientId: "1", userId: "a", containOSCC: false, confidenceRate: 0.1, survey: "a", notes: "a", imageUrl:"data:image/png;base64,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"},
    {id: "1", dateCreated: new Date(2024, 2, 23), patientId: "2", userId: "a", containOSCC: true, confidenceRate: 0.5, survey: "a", notes: "a", imageUrl:"data:image/png;base64,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"},
    {id: "2", dateCreated: new Date(2024, 3, 5), patientId: "2", userId: "a", containOSCC: true, confidenceRate: 0.6, survey: "b", notes: "b", imageUrl:"data:image/jpeg;base64,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"}
  ]
  const patients = [
    {
      id: "0",
      dateCreated: new Date(2024, 9, 25),
      firstName: "Rayyan",
      middleName: "Midhat Abdul",
      lastName: "Khalique",
      dateOfBirth: new Date(2009, 3, 3),
      sex: "male"
    },{
      id: "1",
      dateCreated: new Date(2024, 8, 30),
      firstName: "Dylan",
      middleName: "Bhavesh",
      lastName: "Patel",
      dateOfBirth: new Date(2009, 2, 3),
      sex: "male"
    },{
      id: "2",
      dateCreated: new Date(2024, 9, 31),
      firstName: "Trevon",
      middleName: null,
      lastName: "Nguyen",
      dateOfBirth: new Date(2009, 5, 20),
      sex: "male"
    }
  ]