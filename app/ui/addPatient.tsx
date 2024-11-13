import { useState } from "react"
export default function AddPatient(){
    const [first, setFirst] = useState("");
    const [middle, setMiddle] = useState("");
    const [last, setLast] = useState("");
    const [dOB, setDOB] = useState(new Date());
    const [sex, setSex] = useState("");

    function handleSubmit(e : any) {
        alert("hello");
    }

    return (
        <main>
        <form onSubmit={handleSubmit} className="border rounded-lg shadow-lg p-6 bg-hblue-light/[0.3] border-hblue-light/[0.5] grid grid-cols-1">
            <label className="grid grid-cols-2 py-5">First Name*{' '}
                <input type="text" value={first} onChange={(e) => setFirst(e.target.value)} className="mx-auto border rounded-lg shadow-lg w-[50%]" required placeholder="first name"/>
            </label>
            <label className="grid grid-cols-2 py-5">Middle Name{' '}
                <input type="text" value={middle} onChange={(e) => setMiddle(e.target.value)} className="mx-auto border rounded-lg shadow-lg w-[50%]" placeholder="middle name"/>
            </label>
            <label className="grid grid-cols-2 py-5">Last Name*{' '}
                <input type="text" value={last} onChange={(e) => setLast(e.target.value)} className="mx-auto border rounded-lg shadow-lg w-[50%]" required placeholder="last name"/>
            </label>
            <label className="grid grid-cols-2 py-5">Date of Birth*{' '}
                <input type="date" value={dOB.toLocaleDateString('en-GB')} onChange={(e) => setDOB(new Date(e.target.value))} className="mx-auto border rounded-lg shadow-lg w-[50%]" required/>
            </label>
            <label className="grid grid-cols-2 py-5">Sex*{' '}
                <select value={sex} defaultValue={""} onChange={(e) => setSex(e.target.value)} className="mx-auto border rounded-lg shadow-lg w-[50%]" required>
                    <option disabled value={""}>Select</option>
                    <option value={"male"} key={"male"}>Male</option>
                    <option value={"female"} key={"female"}>Female</option>
                </select>
            </label>
            <input type="submit" className="inline-block w-min py-1 px-3 border rounded-lg shadow-lg mx-auto bg-hblue-light/[0.4] border-hblue-light/[0.5]"/>
        </form>
        </main>
    )
}