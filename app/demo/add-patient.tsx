import { addPatient } from "../lib/actions";
async function formAction(formData: FormData) {
    await addPatient(formData);
    alert("Created a patient.");
}
export default function AddPatientForm() {
    return (
        <form action={formAction}>
            <div>First Name</div>
            <input type="text" name="firstName" />
            <div>Middle name</div>
            <input type="text" name="middleName" />
            <div>Last name</div>
            <input type="text" name="lastName" />
            <div>Date of birth</div>
            <input type="date" name="dateOfBirth" />
            <div>Sex (0/1)</div>
            <input type="number" name="lastName" />
            <div>Assigned user ID</div>
            <input type="text" name="assignedUser" />
        </form>
    );
}