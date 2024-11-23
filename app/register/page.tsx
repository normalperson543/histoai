import RegisterForm from "../ui/register-form"
import { checkSetup } from "@/internal-config";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register"
};
export default async function Register() {
    const isSetup = await checkSetup();
    if (!isSetup) {
        redirect("/setup")
    }
    return (
        <>
            <RegisterForm/>
        </>
    )
}