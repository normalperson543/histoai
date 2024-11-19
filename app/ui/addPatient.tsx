'use client';
import { addPatient } from "@/app/lib/actions"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { useActionState } from "react";
async function handleSubmit(authId: string, formData: FormData) {
    try {
        const createdPatient = addPatient(authId, formData);
        const patientId = (await createdPatient).id;
        redirect(`/dashboard/patients/${patientId}`);
    } catch(error) {
        alert(`Something went wrong. Please try again later.`);
    }
}
export default function AddPatientForm({authId}: {authId: string}){
    const handleSubmitWithId = handleSubmit.bind(null, authId)
    
    return (
        <>
            <form action={handleSubmitWithId} className="p-6 grid grid-cols-1">
                <label className="grid grid-cols-2 py-5">First Name
                    <input type="text" name="firstName" className="mx-auto border rounded-lg shadow-lg w-[50%]" required placeholder="first name"/>
                </label>
                <label className="grid grid-cols-2 py-5">Middle Name
                    <input type="text" name="middleName" className="mx-auto border rounded-lg shadow-lg w-[50%]" required placeholder="middle name"/>
                </label>
                <label className="grid grid-cols-2 py-5">Last Name
                    <input type="text" name="lastName" className="mx-auto border rounded-lg shadow-lg w-[50%]" required placeholder="last name"/>
                </label>
                <label className="grid grid-cols-2 py-5">Date of Birth
                    <input type="date" name="dateOfBirth" className="mx-auto border rounded-lg shadow-lg w-[50%]" required/>
                </label>
                <label className="grid grid-cols-2 py-5">Sex
                    <select name="sex" className="mx-auto border rounded-lg shadow-lg w-[50%]" required>

                        <option value={"male"} key={"male"}>Male</option>
                        <option value={"female"} key={"female"}>Female</option>
                    </select>
                </label>
                <input type="text" name="assignedUser"/>
                <input type="submit" className="inline-block w-min py-0.5 px-1 border rounded-lg shadow-lg mx-auto bg-hblue-light/[0.8]"/>
            </form>
        </>
    )
}