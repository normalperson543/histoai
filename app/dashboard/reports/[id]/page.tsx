import Link from "next/link";
import { fetchPatient, fetchReport } from "@/app/lib/data";
import { Metadata } from "next";
import { deleteReport } from "@/app/lib/actions";
import { redirect } from "next/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Report Info"
};
async function deleteAction(patientId: string, formData: FormData) {
  'use server';
  deleteReport(patientId);
  redirect("/dashboard/reports");
}

export default async function ReportDetailPage({ params }: {params:any}) {
  const { id } = await params;  // Extract the dynamic segment
  const report = await fetchReport(id);
  if (!report) {
    return (<p>Couldn&apos;t find a report with this ID.</p>);
  }
  const deleteActionWithId = deleteAction.bind(null, id);
  const patient = await fetchPatient(report.patientId);
  return (
    <main className="flex flex-col pt-10">
      <h1 className="text-left text-5xl font-bold mb-8 ml-5">Report Details</h1>
      <p className="text-left text-sm ml-5 text-gray-500">**These results are produced by aritficial intelligence and should not be used as diagnosis.</p>
      <p className="text-left text-sm ml-5 text-gray-500">**This tool is meant to be used as a second opinion for Pathologists to review. </p>
      <div className="border rounded-lg shadow-lg w-[50%] max-w-4xl p-6 bg-hblue-light/[0.4] my-5 ml-5">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-lg font-semibold mb-4 text-center">Report ID: <span className="font-normal text-gray-700">{report.id}</span></p>
            </div>
            <div>
                <h2 className="font-semibold">Date Added</h2>
                <p className="text-gray-700">
                {report.dateGenerated.toLocaleDateString('en-US', { year: "numeric", month: "long", day: "numeric" })}
                </p>
            </div>
            <div>
                <h2 className="font-semibold">Results</h2>
                  {report.containsOSCC ? 
                  <div className="p-1 bg-red-300 rounded-full">OSCC Detected</div>
                  : 
                  <div className="p-1 bg-green-300 rounded-full">No OSCC Detected</div>
                  }
            </div>
            <div>
                <h2 className="font-semibold">Confidence Rate</h2>
                <p className="text-gray-700">{Math.floor(report.confidenceRate * 10000) / 100}%</p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col my-5">
              <h1 className="font-semibold">Image</h1>
              <Image src={`/api/get_image/${report.id}`} className="m-auto max-w-[50%] aspect-square rounded-md object-cover object-center" height={200} width={200} alt="Uploaded histopathological image"></Image>
          </div>
          { report.notes != "" &&
            <div className="text-center">
              <h1 className="font-semibold">Notes:</h1>
              <p>{report.notes}</p>
            </div>
          }
          <div className="flex items-center justify-center flex-row my-5">
            <form action={deleteActionWithId}>
              <button className='border rounded-md shadow-lg bg-hblue-light/[0.4] px-1'>Delete this Report</button>
            </form>
          </div>
      </div>
      <h1 className="mt-10 text-4xl font-semibold ml-5">Patient</h1>
          <div className="border rounded-lg shadow-lg w-[50%] max-w-4xl p-6 bg-hblue-light/[0.4] my-5 ml-5">
              {!!patient ?
                <Link href={`/dashboard/patients/${report.patientId}`}>
                    <div className="grid grid-cols-2 gap-4 text-center hover:bg-hblue-light/[0.2]">
                        <div>
                            <h2 className="font-semibold">Patient Name</h2>
                            <p>{patient?.firstName}{patient?.middleName && ` ${patient.middleName} `} {patient?.lastName}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Patient ID</h2>
                            <p>{report.patientId}</p>
                        </div>
                    </div>
                </Link>
              : <div>The patient associated with this report was deleted.</div>
              }
          </div>
    </main>
  );
}