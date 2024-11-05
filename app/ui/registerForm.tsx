"use client";
import { useState } from "react";
import Link from "next/link";
export default function RegisterForm() {
    const [userName, setUserName] = useState();
    const [userPassword, setUserPassword] = useState();
    const [userFirst, setUserFirst] = useState();
    const [userLast, setUserLast] = useState();

    function onSubmit() {
        alert("Hello4")
    }

    return (
        <>
        <form>
            <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                <div className="md:w-1/3 max-w-sm">
                    <img
                    src="./logo.svg"
                    alt="HistoAI image"
                    />
                    <h1 className="text-4xl text-center">Histo<span className="font-semibold">AI</span></h1>
                </div>
                <div className="md:w-1/3 max-w-sm">
                    <label>
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded bg-hblue-light/[0.4]"
                        type="text"
                        placeholder="UserName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    </label>
                    <label>
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-hblue-light/[0.4]"
                        type="password"
                        placeholder="Password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    </label>
                    <label>
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-hblue-light/[0.4]"
                        type="text"
                        placeholder="First Name"
                        value={userFirst}
                        onChange={(e) => setUserFirst(e.target.value)}
                    />
                    </label>
                    <label>
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-hblue-light/[0.4]"
                        type="text"
                        placeholder="Last Name"
                        value={userLast}
                        onChange={(e) => setUserLast(e.target.value)}
                    />
                    </label>
                    <div className="text-center md:text-left">
                    <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 px-2 py-1 text-white uppercase rounded text-xs tracking-wider border bg-hblue-light/[0.4]"
                        type="submit"
                    >
                        Register
                    </button>
                    </div>
                    <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Already have an account? 
                    <Link href={'/app/register'}><span className="text-red-600 hover:underline hover:underline-offset-4"> Login</span></Link>
                    </div>
                </div>
            </section> 
        </form>
        </>
    )
}