import Image from "next/image";
import Link from "next/link";

export default function PatientCard({patient}: {patient: {
    id: string;
    dateCreated: Date;
    firstName: string;
    middleName: string | null;
    lastName: string;
    dateOfBirth: Date;
    sex: string;
    assignedUser: string;
}}) {
    return (
        <Link href={`/dashboard/patients/${patient.id}`}>
            <div className="border-gray-500 border rounded-md p-2">
                <p className="text-lg font-bold">{patient.lastName}, {patient.firstName.substring(0, 1)}</p>
                <p>Date created: {patient.dateCreated.toLocaleDateString('en-US', { year: "numeric", month: "long", day: "numeric" })}</p>
                <p>Sex: {patient.sex}</p>
            </div>
        </Link>
    )
}