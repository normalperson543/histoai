"use client";
import AddPatient from '@/app/ui/addPatient';
import Link from 'next/link';
import { useState } from 'react';
import AddReport from '@/app/ui/addReport';
export default function UploadPage() {
  const [showPatient, setShowPatient] = useState(false);
  const [showReport, setShowReport] = useState(false);

  function handlePatient() {
    setShowPatient(!showPatient)
  }

  function handleReport() {
    setShowReport(!showReport)
  }

  return (
    <main>
      <div className='grid grid-cols-2'>
        {showPatient ? (
          <div>
            <button onClick={handlePatient}>Undo</button>
            <AddPatient/>
          </div>
        ) : (
          <div>
            <button onClick={handlePatient}>Add Patient</button>
          </div>
        )}
        {showReport ? (
          <div>
            <button onClick={handleReport}>Undo</button>
            <AddReport patients={patients}/>
          </div>
        ) : (
          <div>
            <button onClick={handleReport}>Add Report</button>
          </div>
        )}
      </div>
    </main>
  );
}

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