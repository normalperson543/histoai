import Image from "next/image";
import Link from "next/link";
import SmProfilePicture from "./profile-picture";
export default function Header() {
    return (
        <header className="flex gap-2 grow items-center flex-row justify-around w-full px-2">
            <div className="flex grow justify-start">
                <Image
                    src="logo.svg"
                    width={50}
                    height={50}
                    alt="HistoAI logo"
                />
                <Link href="/patients">
                    <button className="flex items-center h-full px-3 py-1 shrink">
                        <strong>Patients</strong>
                    </button>
                </Link>
                <Link href="/reports">
                    <button className="flex items-center h-full px-3 py-1 shrink">
                        <strong>Reports</strong>
                    </button>
                </Link>
            </div>
            <div className="flex grow justify-end">
                <button className="flex gap-2 items-center h-full px-3 py-1 shrink">
                    <SmProfilePicture username="dp" /> 
                    Dylan Bhavesh Patel
                </button>
                <button className="flex gap-2 items-center h-full px-3 py-1 shrink">
                    Sign up
                </button>
                <Link href="/login">
                    <button className="flex gap-2 items-center h-full px-3 py-1 shrink">
                        Log in
                    </button>
                </Link>
            </div>
        </header>
    );
}