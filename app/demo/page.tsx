import Upload from "./upload";
import AddPatientForm from "./add-patient";
import Image from "next/image";
import AuthTest from "./auth-test";
export default async function Page() {
    return (
        <>
            <h1>Upload OSCC image</h1>
            <AuthTest />
            <Image
                src={`/api/get_image/1521053`}
                alt="Histopathological image"
                width={500}
                height={500}
            />
            <Upload />
            <AddPatientForm />
        </>
    );
}