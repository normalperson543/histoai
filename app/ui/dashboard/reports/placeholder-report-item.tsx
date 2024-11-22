import Link from 'next/link';

export default function PlaceholderReportItem({report}: {report: {
    id: string;
    dateGenerated: Date;
    patientId: string;
    userId: string;
    containsOSCC: boolean;
    confidenceRate: number;
    survey: string;
    notes: string;
}}) {
    return (
        <li key={report.id} className='px-3 py-1 hover:bg-hblue/[0.1]'>
            <Link href={`/dashboard/reports/${report.id}`}>
                <div className='flex col-2'>
                    <p className='text-left w-[50%] '><em>Loading {report.id}...</em></p>
                    <p className='text-right w-[50%]'>{report.dateGenerated.toLocaleDateString()}</p>
                </div>
            </Link>
        </li>
    )
}