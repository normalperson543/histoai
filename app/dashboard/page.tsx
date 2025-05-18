import { findPatientsUnderUser, findPatientReportsUnderUser, fetchUser } from '../lib/data';
import { auth } from '@/auth';
import { Metadata } from "next";
import ReportCard from '../ui/report-card';
import PatientCard from '../ui/patient-card';

export const metadata: Metadata = {
  title: "Dashboard"
};
export default async function Home() { 
  const session = await auth();
  const recentReports = await findPatientReportsUnderUser(session?.user?.id as string, 0, 5)
  console.log(recentReports);
  const recentPatients = await findPatientsUnderUser(session?.user?.id as string, 0, 5);
  const userInfo = await fetchUser(session?.user?.id as string);
  return (
    <main className='p-10'>
      <h1 className='text-3xl'>Welcome, {userInfo?.firstName}</h1>
      <div className='flex flex-col mt-2'>
        <h1 className='text-lg '>Recent Uploads</h1>
      </div>
      <div className='flex flex-row'>
        {recentReports.length == 0 ? <p className="mx-auto text-gray-700">There are no reports you created.</p> : recentReports.map((obj: {
          id: string;
          dateGenerated: Date;
          patientId: string;
          userId: string;
          containsOSCC: boolean;
          confidenceRate: number;
          survey: string;
          notes: string;
        }) => {
          return (<ReportCard report={obj} key={obj.id}/>)
        })}
      </div>
      <div className='flex flex-col mt-2'>
        <h1 className='text-lg '>Recent Patients</h1>
      </div>
      <div className='flex flex-row'>
        {recentPatients.length == 0 ? <p className="mx-auto text-gray-700">There are no patients you created.</p> : recentPatients.map((obj: {
            id: string;
            dateCreated: Date;
            firstName: string;
            middleName: string | null;
            lastName: string;
            dateOfBirth: Date;
            sex: string;
            assignedUser: string;
        }) => {
                return (<PatientCard patient={obj} key={obj.id}/>)
              })}
            </div>
          </main>
        );
}