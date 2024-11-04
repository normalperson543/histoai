import { useState } from "react";
import { useRef } from "react";
export default function AddReport({patients}) {
    const [patient, setPatient] = useState();
    const [file, setFile] = useState();
    const inputFile = useRef(null)

    function handleFileChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setPatient("");
        setFile("");
        if(inputFile) {
            inputFile.current.type = "text";
            inputFile.current.type = "file";
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Patient
                <select value={patient} onChange={(e) => setPatient(e.target.value)}>
                    <option disabled selected value={""}>Select</option>
                    {patients.map((patient) => (
                        <option key={patient.id} value={patient.id}>{patient.firstName} {patient?.middleName && `${patient.middleName.substring(0,1)} `}{patient.lastName}</option>
                    ))}
                </select>
            </label>
            <label>Insert Image
                <input type="file" onChange={handleFileChange} ref={inputFile}/>
            </label>
            <img src={file}/>
            <input type="submit"/>
        </form>
        </>
    )
}