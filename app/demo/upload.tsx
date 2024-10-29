'use client';

import { uploadImage } from "../lib/actions";

async function uploadAction(formData: FormData) {
    await uploadImage(formData);
    alert("Successfully uploaded.")
}

export default function Upload() {
    return (
        <form action={uploadAction}>
            <div>Patient ID:</div>
            <input type="text" name="patientId" />
            <div>Analysis ID:</div>
            <input type="text" name="analysisId" />
            <div>Upload file:</div>
            <input type="file" name="file" />
            <input type="submit" value="Upload!"/>
        </form>
    );
}