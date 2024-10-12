'use client';
import { addPatient } from "../lib/actions";
async function formAction(formData: FormData) {
    await addPatient(formData);
    alert("Created a patient.");
}
export default function AddPatientForm() {
    return (
        <form action={formAction}>
            <div>First Name</div>
            <input type="text" name="firstName" required />
            <div>Middle name</div>
            <input type="text" name="middleName" required />
            <div>Last name</div>
            <input type="text" name="lastName" required />
            <div>Date of birth</div>
            <input type="date" name="dateOfBirth" required/>
            <div>Sex</div>
            <input type="radio" name="sex" value="male" id="male-sex" required />
            <label htmlFor="male-sex">Male</label>
            <input type="radio" name="sex" value="female" id="female-sex" required />
            <label htmlFor="female-sex">Female</label>
            <input type="radio" name="sex" value="unspecified" id="unspecified-sex" required />
            <label htmlFor="unspecified-sex">Unspecified</label>
            <div>Assigned user ID</div>
            <input type="text" name="assignedUser" required />
            <input type="submit" value="Submit" />
        </form>
    );
}