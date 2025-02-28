'use client';

import { completeSetup } from "../lib/actions";
import { useActionState } from "react";
import { CircularProgress } from "@mui/material";
import config from "@/histoai.config";
import Image from "next/image";

export default function SetupForm() {
    const [error, formAction, isPending] = useActionState(completeSetup, undefined);
    
    const orgName = config.orgName;
    const shortOrgName = config.shortOrgName;
    return (
        <>
            <form action={formAction}>
                <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                    <div className="md:w-1/3 max-w-sm">
                        <Image
                            src="/logo.svg"
                            alt="HistoAI logo"
                            height={200}
                            width={200}
                        />
                        <h1 className="text-4xl text-center">
                            histo<span className="font-semibold">AI</span>
                        </h1>
                    </div>
                    <div className="md:w-1/3 max-w-sm">
                        <label>
                        <div className="text-xl font-semibold">
                            🎉 Congratulations, you successfully deployed The OSCC Project!
                        </div>
                        <div><p>Here is the configuration info. Check if this is correct. If it isn&apos;t, modify the <code>histoai.config.ts</code> file.</p></div>
                        <ul className="list-disc list-inside">
                            <li>Full organization name: {orgName}</li>
                            <li>Short organization name: {shortOrgName}</li>
                        </ul>
                        <div><p>Create the admin account below.</p></div>
                        <input
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded bg-hblue-light/[0.4]"
                            type="text"
                            name="username"
                            placeholder="UserName*"
                            required
                        />
                        </label>
                        <label>
                        <input
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-hblue-light/[0.4]"
                            type="password"
                            name="password"
                            placeholder="Password*"
                            required
                        />
                        </label>
                        <label>
                        <input
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-hblue-light/[0.4]"
                            type="text"
                            name="firstName"
                            placeholder="First Name*"
                            required
                        />
                        </label>
                        <label>
                        <input
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-hblue-light/[0.4]"
                            type="text"
                            name="lastName"
                            placeholder="Last Name*"
                            required
                        />
                        </label>
                        <div className="text-center md:text-left">
                        {
                            !isPending ?
                                <button
                                    className="mt-4 bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs tracking-wider border bg-hblue-light/[0.4]"
                                    type="submit"
                                >
                                    Start using The OSCC Project
                                </button>
                            :
                                <div className="my-1"><CircularProgress size="30px"/></div>
                        }
                        </div>
                    </div>
                </section> 
            </form>
            {
                error && (
                    <div className="bg-red-300 p-3">
                        {error}
                    </div>
                )
            }
        </>
    )
}