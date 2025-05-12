import Image from "next/image";
import Link from "next/link";

export default function ReportCard({report}: {report: {
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
        <Link href={`/dashboard/reports/${report.id}`}>
            <div className="border-gray-500 border rounded-md p-2">
                <Image src={`/api/get_image/${report.id}`} alt="Histopathological image" width={72} height={72} />
                <p className="text-lg font-bold">{report.id}</p>
                {report.containsOSCC ? <div className="p-1 bg-red-300 rounded-full">OSCC Detected</div>
                : <div className="p-1 bg-green-300 rounded-full">No OSCC Detected</div>}
                <p>Confidence rate: <b>{Math.round(report.confidenceRate * 10000) / 100}%</b></p>
            </div>
        </Link>
    )
}