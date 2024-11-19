import AddPatientForm from "@/app/ui/addPatient";
import { auth } from "@/auth";

export default async function AddPatient() {
    
    const session = await auth();

    return <AddPatientForm authId={session?.user?.id as string}/>
}