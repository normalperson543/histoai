import Link from "next/link";
export default function Nav() {
    return (
        <nav>
            <div className="w-full h-20 bg-cyan-600 sticky top-0">
                <div className=" flex container mx-auto px-4 h-full justify-center">
                    <div className="flex justify-between items-center h-full">
                        <ul className="hidden md:flex gap-x-6 text-white">
                            <li>
                                <Link href="/">
                                    <p>Home</p>    
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard">
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/patients">
                                    <p>Patients</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/reports">
                                    <p>Report</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/reports/upload">
                                    <p>Upload</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}