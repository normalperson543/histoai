import { findAllPatients } from "@/app/lib/data";
import AddReport from "@/app/ui/addReport";
import { auth } from "@/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Report"
};
export default async function NewReportPage() {
    const session = await auth();
    const patients = await findAllPatients();
    return (
        <AddReport patients={patients} authId={session?.user?.id as string} />
    );
}