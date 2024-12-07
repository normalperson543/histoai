import Link from "next/link";
import { fetchPatient } from "@/app/lib/data";
import { findPatientReportsUnderPatient } from "@/app/lib/data";
import { deletePatient } from "@/app/lib/actions";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Info"
};
async function deleteAction(patientId: string, formData: FormData) {
  'use server';
  deletePatient(patientId);
  redirect("/dashboard/patients");
}

export default async function PatientDetailPage({ params }: {params:any}) {
  const { id } = await params;  // Extract the dynamic segment
  const patient = await fetchPatient(id);
  if (!patient) {
    return (<div>Couldn&apos;t find a patient with this ID.</div>)
  }
  const patientReports = await findPatientReportsUnderPatient(id);
  const deleteActionWithId = deleteAction.bind(null, id);
  const reportRows = patientReports.map((report: {
      id: string;
      dateGenerated: Date;
      patientId: string;
      userId: string;
      containsOSCC: boolean;
      confidenceRate: number;
      survey: string;
      notes: string;
  })  => 
    <Link href={`/dashboard/reports/${report.id}`} key={report.id}>
      <div className="grid grid-cols-2 gap-4 text-center items-center justify-center my-8 hover:bg-hblue-light/[0.2]" key={`${report.id}`}>
        <p>{report.id}</p>
        <p className="">{report.dateGenerated.toDateString()}</p>
      </div>
    </Link>
  );
  return (
    <main className="flex flex-col pt-10">
      <h1 className="text-left text-5xl font-bold mb-8 ml-5">Patient Details</h1>
      <div className="border rounded-lg shadow-lg w-[50%] max-w-4xl p-6 bg-hblue-light/[0.4] ml-5">
          <p className="text-lg font-semibold mb-4 text-center">Patient ID: <span className="font-normal text-gray-700">{patient.id}</span></p>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
                <h2 className="font-semibold">Patient Name</h2>
                <p className="text-gray-700">
                {patient.firstName}{patient.middleName && ` ${patient.middleName}`} {patient.lastName}
                </p>
            </div>
            <div>
                <h2 className="font-semibold">Date of Birth</h2>
                <p className="text-gray-700">
                {patient.dateOfBirth.toLocaleDateString('en-US', { year: "numeric", month: "long", day: "numeric" })}
                </p>
            </div>
            <div className="col-span-2">
                <h2 className="font-semibold">Sex</h2>
                <p className="text-gray-700">{patient.sex}</p>
            </div>
          </div>
          <form action={deleteActionWithId}>
            <button className='border rounded-md shadow-lg bg-hblue-light/[0.4] px-1'>Delete this Patient</button>
          </form>
      </div>
      <h1 className="mt-10 text-4xl font-semibold ml-5">Reports</h1>
      <div className="border rounded-lg shadow-lg w-[50%] max-w-4xl p-6 bg-hblue-light/[0.4] mt-2 ml-5">
        <div className="grid grid-cols-2 gap-4 text-center">
          <h1 className="font-semibold">Report ID</h1>
          <h1 className="font-semibold">Date Added</h1>
        </div>
        {reportRows ? (
          reportRows
        ) : (
          <h1 className="text-xl text-center">No Reports Found for this Patient</h1>
        )}
      </div>
    </main>
  );
}