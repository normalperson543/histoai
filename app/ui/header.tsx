import Image from "next/image";
import Link from "next/link";
import SmProfilePicture from "./profile-picture";
import { auth, signOut } from "@/auth";
import { fetchUser } from "@/app/lib/data";
import { checkSetup } from "@/internal-config";
import config from "@/histoai.config";

export default async function Header() {
    const session = await auth();
    const isSetup = await checkSetup();
    const shortOrgName = config.shortOrgName;
    let fullName;
    if (session) {
        const user = await fetchUser(session?.user?.id as string);
        fullName = user?.firstName + " " + user?.lastName;
    }
    return (
        <header className=" flex gap-2 grow items-center flex-row justify-around w-full px-2 bg-hblue text-white z-50">
            <div className="flex grow justify-start">
                <div className="flex flex-row ">
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            width={50}
                            height={50}
                            alt="HistoAI logo"
                        />
                    </Link>
                    <Link href="/">
                        <strong className="flex items-center h-full px-3 py-1 shrink">
                            {shortOrgName}
                        </strong>
                    </Link>
                </div>
                <Link href="/dashboard">
                    <button className="flex items-center h-full px-3 py-1 shrink">
                        <strong>Dashboard</strong>
                    </button>
                </Link>
                <Link href="/dashboard/patients">
                    <button className="flex items-center h-full px-3 py-1 shrink">
                        <strong>Patients</strong>
                    </button>
                </Link>
                <Link href="/dashboard/reports">
                    <button className="flex items-center h-full px-3 py-1 shrink">
                        <strong>Reports</strong>
                    </button>
                </Link>
            </div>
            {isSetup && 
                <div className="flex grow justify-end">
                    {
                        session && (
                            <div className="flex shrink justify-end">
                                <button className="flex gap-2 items-center h-full px-3 py-1 shrink">
                                    <SmProfilePicture username={fullName as string} /> 
                                    {fullName}
                                </button>
                            </div>
                        )
                    }
                    <div className="flex shrink justify-end">
                        {
                            !session && (
                                <>
                                    <Link href={"register"}>
                                        <button className="flex gap-2 items-center h-full px-3 py-1 shrink">
                                            Sign up
                                        </button>
                                    </Link>
                                    <Link href="/login">
                                        <button className="flex gap-2 items-center h-full px-3 py-1 shrink">
                                            Log in
                                        </button>
                                    </Link>
                                </>
                            )
                        }
                        {
                            session && (
                            <form
                                action={async () => {
                                    'use server';
                                    await signOut({redirect: true, redirectTo: "/login"});
                                }}
                            >
                                <button className="flex gap-2 items-center h-full px-3 py-1 shrink" type="submit">Sign out</button>
                            </form>
                            )
                        }
                    </div>
                </div>
            }
        </header>
    );
}