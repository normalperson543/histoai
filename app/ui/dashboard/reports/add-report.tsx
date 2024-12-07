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
        const osccDetected = result.prediction
        const confidenceRate = result.confidenceRate;
        submitReport(authId, osccDetected, confidenceRate, formData);
    }
    const inputFile = useRef(null)
    function handleFileChange(e:any) {
        setFile(URL.createObjectURL(e.target.files[0]))
    }
    
    return (
        <>
        <div className="border rounded-lg shadow-lg w-[50%] max-w-4xl p-6 bg-hblue-light/[0.4] ml-5 mt-10">
            <h1 className="text-2xl px-6 pt-6 font-semibold">Add Report</h1>
            <form action={formAction} className="p-6 flex flex-col">
                <label className="block text-gray-700 font-medium mb-2">Patient*</label>
                <select id="patientId" name="patientId"
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
                    {patients.map((patient: any) => (
                        <option key={patient.id} value={patient.id}>{patient.firstName} {patient?.middleName && `${patient.middleName.substring(0,1)} `}{patient.lastName}</option>
                    ))}
                </select>
                
                <label className="mt-5 mb-2 block  text-gray-700 font-medium text-[#07074D]">
                        Upload Image*
                </label>

                <div className="mb-8">
                        
                    <label
                        className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-hblue-dark p-12 text-center">
                        <div>
                            <span className="mb-2 block text-gray-700 font-medium">
                                Drop files here
                            </span>
                            <span className="mb-2 block text-gray-700 font-medium">
                                Or
                            </span>
                            <span
                                className="inline-flex rounded border border-hblue-dark py-2 px-7  text-gray-700 font-medium">
                                <input type="file" name="imageFile" id="file" className="sr-only" onChange={handleFileChange} ref={inputFile} accept=".png,.jpg" required/>
                                Browse
                            </span>
                        </div>
                    </label>
                </div>
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
        </div>

        
        </>
    )
}