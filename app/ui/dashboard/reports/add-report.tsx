'use client';
import { useActionState } from "react";
import { submitReport } from "../../../lib/actions";
import {CircularProgress} from "@mui/material";
import predictOSCC from "../../../lib/model";
import { useState } from "react";
import { useRef } from "react";
import Image from "next/image";

export default function AddReport({patients, authId}: {patients: {
    id: string;
    dateCreated: Date;
    firstName: string;
    middleName: string | null;
    lastName: string;
    dateOfBirth: Date;
    sex: string;
    assignedUser: string;
}[], authId: string}) {
    const [error, formAction, isPending] = useActionState(submitReportWithId, undefined)
    const [file, setFile] = useState("")
    async function submitReportWithId(prevState: void|undefined, formData: FormData) {
        const result = await predictOSCC(document.getElementById("osccImage") as HTMLImageElement);
        const osccDetected = result.highestIndex == 1;
        const confidenceRate = result.confidenceRate;
        submitReport(authId, osccDetected, confidenceRate, formData);
    }
    const inputFile = useRef(null)
    function handleFileChange(e:any) {
        setFile(URL.createObjectURL(e.target.files[0]))
    }
    
    return (
        <form action={formAction} className="p-6 grid grid-cols-1">
            <label className="grid grid-cols-2 py-5">Patient
                <select name="patientId" className="mx-auto border rounded-lg shadow-lg w-[50%]"  required>
                    <option disabled value={""}>Select</option>
                    {patients.map((patient: any) => (
                        <option key={patient.id} value={patient.id}>{patient.firstName} {patient?.middleName && `${patient.middleName.substring(0,1)} `}{patient.lastName}</option>
                    ))}
                </select>
            </label>
            <label className="grid grid-cols-2 py-5">Insert Image
                <input type="file" name="imageFile" className="mx-auto w-[50%]" onChange={handleFileChange} ref={inputFile} accept=".png,.jpg"/>
            </label>
            { !!file &&
                <Image src={file} id="osccImage" alt="Uploaded OSCC image" className="mx-auto rounded-sm h-24 w-24" height={100} width={100}/>
            }
            <input type="submit" className="inline-block w-min py-0.5 px-1 border rounded-lg shadow-lg mx-auto bg-hblue-light/[0.8]"/>
            {isPending && 
                <div className="text-center">
                    <CircularProgress />
                    <b>Uploading and analyzing the image. Please wait.</b>
                </div>
            } 
        </form>
    )
}