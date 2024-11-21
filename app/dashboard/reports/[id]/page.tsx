import Link from "next/link";
import { fetchPatient, fetchReport } from "@/app/lib/data";
export default async function ReportDetailPage({ params }: {params:any}) {
  const { id } = await params;  // Extract the dynamic segment
  const report = await fetchReport(id);
  if (!report) {
    return (<p>Couldn't find a report with this ID.</p>);
  }
  const patient = await fetchPatient(report.patientId);
  return (
    <main className="flex flex-col items-center pt-10">
      <h1 className="text-center text-5xl font-bold mb-8">Report Details</h1>
      <div className="border rounded-lg shadow-lg w-[50%] max-w-4xl p-6 bg-hblue-light/[0.4] my-5">
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
                <p className="text-gray-700">
                  {report.containsOSCC ? "OSCC Detected" : "No OSCC Detected"}
                </p>
            </div>
            <div className="">
                <h2 className="font-semibold">Confidence Rate</h2>
                <p className="text-gray-700">{report.confidenceRate}</p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col my-5">
              <h1 className="font-semibold">Image</h1>
              <img src={`/api/get_image/${report.id}`} className="m-auto max-w-[50%]"></img>
          </div>
          <div className="text-center">
              <h1 className="font-semibold">Notes:</h1>
              <p>{report.notes}</p>
          </div>
          <div className="flex items-center justify-center flex-row my-5">
              
          </div>
      </div>
      <h1 className="text-center text-3xl font-bold mt-5">Patient</h1>
          <div className="border rounded-lg shadow-lg w-[50%] max-w-4xl p-6 bg-hblue-light/[0.4] my-5">
              <Link href={`/patients/${report.patientId}`}>
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
          </div>
    </main>
  );
}