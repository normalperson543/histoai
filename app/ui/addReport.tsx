import { useState , useRef} from "react";
export default function AddReport({patients} : Readonly<{patients : any}>) {
    const [patient, setPatient] = useState();
    const [file, setFile] = useState("");
    const inputFile = useRef(null)

    function handleFileChange(e:any) {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    function handleSubmit(e:any) {
        alert("hello2")
    }

    return (
        <main>
        <form onSubmit={handleSubmit} className="border rounded-lg shadow-lg p-6 bg-hblue-light/[0.3] border-hblue-light/[0.5] grid grid-cols-1">
            <label className="grid grid-cols-2 py-5">Patient*{' '}
                <select value={patient} defaultValue={""} onChange={(e:any) => setPatient(e.target.value)} className="mx-auto border rounded-lg shadow-lg w-[50%]" required>
                    <option disabled value={""}>Select</option>
                    {patients.map((patient:any) => (
                        <option key={patient.id} value={patient.id}>{patient.firstName} {patient?.middleName && `${patient.middleName.substring(0,1)} `}{patient.lastName}</option>
                    ))}
                </select>
            </label>
            <label className="grid grid-cols-2 py-5">Insert Image*{' '}
                <input type="file" onChange={handleFileChange} ref={inputFile} className="mx-auto w-[50%]" required/>
            </label>
            {file && <img src={file} className="mx-auto" alt=""/>}
            
            <input type="submit" className="inline-block w-min px-3 py-1 border rounded-lg shadow-lg mx-auto bg-hblue-light/[0.4] border-hblue-light/[0.5]"/>
        </form>
        </main>
    )
}