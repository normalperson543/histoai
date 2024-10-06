import { uploadImage } from "../lib/actions";
export default async function Page() {
    return (
        <>
            <h1>Upload OSCC image</h1>
            <form action={uploadImage}>
                <div>Patient ID:</div>
                <input type="text" name="patientId" />
                <div>Analysis ID:</div>
                <input type="text" name="analysisId" />
                <div>Upload file:</div>
                <input type="file" name="file" />

                <input type="submit" value="Upload!"/>
            </form>
        </>
    );
}