import Upload from "./upload";
import AddPatientForm from "./add-patient";
export default async function Page() {
    return (
        <>
            <h1>Upload OSCC image</h1>
            <Upload />
            <AddPatientForm />
        </>
    );
}