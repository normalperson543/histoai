'use client';
import Link from "next/link";
import ReportItem from "./report-item";
import { fetchPatient } from "@/app/lib/data";
import React, { Suspense } from "react";

export default function ReportContainer({reports, reportItems}: {reports: {
    id: string;
    dateGenerated: Date;
    patientId: string;
    userId: string;
    containsOSCC: boolean;
    confidenceRate: number;
    survey: string;
    notes: string;
}[],
reportItems: any[]}) {
    return (
        <main>
            <h1 className='text-5xl pt-10 ml-5'>Reports</h1>
            <ul className='block w-[50%] ml-5 mt-10 divide-y divide-hblue/[0.25] border-y border-hblue-light/[0.5] shadow-lg'>
                <li className='p-1 bg-hblue-light/[0.2] px-2'>
                <div className='flex col-2'>
                    <p className='text-left w-[50%]'>Patient Name Under Report</p>
                    <p className='text-right w-[50%]'>Date Generated</p>
                </div>
                </li>  
                {reportItems}
                
            </ul>
            <div className="relative w-[50%] ml-5">
                <Link href="/dashboard/reports/new">
                    <button className='border rounded-md shadow-lg bg-hblue-light/[0.4] px-1 absolute top-5 right-0'>Add Report</button>
                </Link>
            </div>
        </main>
    )
}