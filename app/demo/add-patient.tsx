import { addPatient } from "../lib/actions";
async function formAction(formData: FormData) {
    await addPatient(formData);
}
export default function AddPatientForm() {
    return (
        <form action={formAction}>

        </form>
    );
}