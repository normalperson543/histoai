'use server';

import PlaceholderReportItem from "./placeholder-report-item";
import { Suspense } from "react";
import Link from "next/link";

export default async function ReportItem({report, patient}: {report: {
    id: string;
    dateGenerated: Date;
    patientId: string;
    userId: string;
    containsOSCC: boolean;
    confidenceRate: number;
    survey: string;
    notes: string;
}, patient: {
    id: string;
    dateCreated: Date;
    firstName: string;
    middleName: string | null;
    lastName: string;
    dateOfBirth: Date;
    sex: string;
    assignedUser: string;
} | null}) {
    return(
        <Suspense fallback={<PlaceholderReportItem report={report} />}>
            <li key={report.id} className='px-3 py-1 hover:bg-hblue/[0.1]'>
                <Link href={`/dashboard/reports/${report.id}`}>
                    <div className='flex col-2'>
                    {!!patient ?
                        <p className='text-left w-[50%]'>{patient?.firstName}{patient?.middleName && ` ${patient.middleName} `} {patient?.lastName}</p>
                        :
                        <p className='text-left w-[50%]'><em>Patient is deleted - report {report.id}</em></p>
                    }
                    <p className='text-right w-[50%]'>{report.dateGenerated.toLocaleDateString()}</p>
                    </div>
                </Link>
            </li>
        </Suspense>
    )
}