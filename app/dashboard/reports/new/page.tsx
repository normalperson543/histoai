import { findAllPatients } from "@/app/lib/data";
import AddReport from "@/app/ui/addReport";
export default async function NewReportPage() {
    const patients = await findAllPatients();
    return (
        <AddReport patients={patients} />
    );
}