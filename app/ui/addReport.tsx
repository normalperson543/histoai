import { useState } from "react";
import { useRef } from "react";
export default function AddReport({patients} : {patients : any}) {
    const [patient, setPatient] = useState();
    const [file, setFile] = useState();
    const inputFile = useRef(null)

    function handleFileChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    function handleSubmit(e) {
        alert("hello2")
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="border rounded-lg shadow-lg p-6 bg-hblue-light/[0.4] grid grid-cols-1">
            <label className="grid grid-cols-2 py-5">Patient
                <select value={patient} onChange={(e) => setPatient(e.target.value)} className="mx-auto border rounded-lg shadow-lg w-[50%]" required>
                    <option disabled selected value={""}>Select</option>
                    {patients.map((patient:any) => (
                        <option key={patient.id} value={patient.id}>{patient.firstName} {patient?.middleName && `${patient.middleName.substring(0,1)} `}{patient.lastName}</option>
                    ))}
                </select>
            </label>
            <label className="grid grid-cols-2 py-5">Insert Image
                <input type="file" onChange={handleFileChange} ref={inputFile} className="mx-auto w-[50%]" required/>
            </label>
            <img src={file} className=""/>
            <input type="submit" className="inline-block w-min py-0.5 px-1 border rounded-lg shadow-lg mx-auto bg-hblue-light/[0.8]"/>
        </form>
        </>
    )
}