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
            <div>Sex (0/1)</div>
            <input type="number" name="sex" required />
            <div>Assigned user ID</div>
            <input type="text" name="assignedUser" required />
        </form>
    );
}