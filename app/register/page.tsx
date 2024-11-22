import RegisterForm from "../ui/registerForm"
import config from "@/histoai.config"
import { redirect } from "next/navigation";

export default function Register() {
    const isSetup = config.isSetup;
    if (!isSetup) {
        redirect("/setup")
    }
    return (
        <>
            <RegisterForm/>
        </>
    )
}