'use client';
export default function AddReport({patients}: {patients: {
    id: string;
    dateCreated: Date;
    firstName: string;
    middleName: string | null;
    lastName: string;
    dateOfBirth: Date;
    sex: string;
    assignedUser: string;
}[]}) {
    return (
        <form className="p-6 grid grid-cols-1">
            <label className="grid grid-cols-2 py-5">Patient
                <select className="mx-auto border rounded-lg shadow-lg w-[50%]"  required>
                    <option disabled value={""}>Select</option>
                    {patients.map((patient: any) => (
                        <option key={patient.id} value={patient.id}>{patient.firstName} {patient?.middleName && `${patient.middleName.substring(0,1)} `}{patient.lastName}</option>
                    ))}
                </select>
            </label>
            <label className="grid grid-cols-2 py-5">Insert Image
                <input type="file" name="imageFile" className="mx-auto w-[50%]" required/>
            </label>
            <input type="submit" className="inline-block w-min py-0.5 px-1 border rounded-lg shadow-lg mx-auto bg-hblue-light/[0.8]"/>
        </form>
    )
}