'use client';
import { addPatient } from "@/app/lib/actions"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { useActionState } from "react";
async function handleSubmit(authId: string, formData: FormData) {
    let patientId;
    try {
        const createdPatient = await addPatient(authId, formData);
        patientId = (await createdPatient).id;
        console.log(patientId);
    } catch(error) {
        alert(`Something went wrong. Please try again later.`);
    }
    redirect(`/dashboard/patients/${patientId}`);
}
export default function AddPatientForm({authId}: {authId: string}){
    const handleSubmitWithId = handleSubmit.bind(null, authId)
    
    return (
        <>
        <div className="border rounded-lg shadow-lg w-[50%] max-w-4xl p-6 bg-hblue-light/[0.4] ml-5 mt-10">
            <h1 className="text-2xl px-6 pt-6 font-semibold">Add Patient</h1>
            <form action={handleSubmitWithId} className="p-6 flex flex-col">

                <label className="block text-gray-700 font-medium mb-2">First Name*</label>
                <input type="text" id="firstName" name="firstName"
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required></input>

                <label className="block text-gray-700 font-medium mb-2">Middle Name</label>
                <input type="text" id="firstName" name="firstName" className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" ></input>

                <label className="block text-gray-700 font-medium mb-2">Last Name*</label>
                <input type="text" id="firstName" name="firstName" className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required></input>

                <label className="block text-gray-700 font-medium mb-2">Date of Birth</label>
                <input type="date" name="dateOfBirth" id="dateOfBirth" className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required/>

                <label className="block text-gray-700 font-medium mb-2">Sex*</label>
                <select id="gender" name="gender"
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
                    <option value="not given" key={"not given"}>Select sex</option>
                    <option value="male" key={"male"}>Male</option>
                    <option value="female" key={"female"}>Female</option>
                </select>

                <input type="text" name="assignedUser" className="hidden"/>
                <input type="submit" className="inline-block w-min py-0.5 px-1 border rounded-lg shadow-lg mx-auto bg-hblue-light/[0.8] mt-2"/>
            </form>
        </div>
            
        </>
    )
}