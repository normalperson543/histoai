import { useState } from "react"
export default function AddPatient(){
    const [first, setFirst] = useState();
    const [middle, setMiddle] = useState();
    const [last, setLast] = useState();
    const [dOB, setDOB] = useState();
    const [sex, setSex] = useState();

    function handleSubmit(e) {
        e.preventDefault()
        setFirst("first")
        setMiddle("middle")
        setLast("last")
        setDOB(new Date())
        setSex("")
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>First Name
                <input type="text" value={first} onChange={(e) => setFirst(e.target.value)}/>
            </label>
            <label>Middle Name
                <input type="text" value={middle} onChange={(e) => setMiddle(e.target.value)}/>
            </label>
            <label>Last Name
                <input type="text" value={last} onChange={(e) => setLast(e.target.value)}/>
            </label>
            <label>Date of Birth
                <input type="date" value={dOB} onChange={(e) => setDOB(e.target.value)}/>
            </label>
            <label>Sex
                <select value={sex} onChange={(e) => setSex(e.target.value)}>
                    <option disabled selected value="">Select</option>
                    <option value={"male"} key={"male"}>Male</option>
                    <option value={"female"} key={"female"}>Female</option>
                </select>
            </label>
            <input type="submit"/>
        </form>
        </>
    )
}