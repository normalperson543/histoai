'use client';

import { createAccount } from "../lib/actions";
import { useActionState } from "react";
import Link from "next/link";
import config from "@/histoai.config";
import { CircularProgress } from "@mui/material";
import Image from "next/image";

export default function RegisterForm() {
    const [error, formAction, isPending] = useActionState(createAccount, undefined);
    const orgName = config.orgName;
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
                        <div className="text-xl text-center font-semibold">
                            {orgName}
                        </div>
                    </div>
                    <div className="md:w-1/3 max-w-sm">
                        <label>
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
                                    Register
                                </button>
                            :
                                <div className="my-1"><CircularProgress size="30px"/></div>
                        }
                        </div>
                        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                        Already have an account? 
                        <Link href={'/login'}><span className="text-red-600 hover:underline hover:underline-offset-4"> Login</span></Link>
                        </div>
                        {
                            error && (
                                <div className="bg-red-300 p-3">
                                    {error}
                                </div>
                            )
                        }
                    </div>
                </section> 
            </form>
        </>
    )
}