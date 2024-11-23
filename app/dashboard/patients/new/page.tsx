import AddPatientForm from "@/app/ui/addPatient";
import { auth } from "@/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Patient"
};
export default async function AddPatient() {
    
    const session = await auth();

    return <AddPatientForm authId={session?.user?.id as string}/>
}