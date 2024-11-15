import { addPatient } from "../lib/actions"
import { useActionState } from "react";
import { auth } from "@/auth";

export default function AddPatientForm(){
    const session = auth();
    const addPatientWithId = addPatient.bind(null, )
    const [error, formAction, isPending] = useActionState(addPatient, undefined);
    return (
        <>
            <form action={formAction} className="p-6 grid grid-cols-1">
                <label className="grid grid-cols-2 py-5">First Name
                    <input type="text" name="firstName" className="mx-auto border rounded-lg shadow-lg w-[50%]" required placeholder="first name"/>
                </label>
                <label className="grid grid-cols-2 py-5">Middle Name
                    <input type="text" name="middleName" className="mx-auto border rounded-lg shadow-lg w-[50%]" placeholder="middle name"/>
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
                <input type="submit" className="inline-block w-min py-0.5 px-1 border rounded-lg shadow-lg mx-auto bg-hblue-light/[0.8]"/>
            </form>
        </>
    )
}