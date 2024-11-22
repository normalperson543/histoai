import SetupForm from "../ui/setupForm";
import { redirect } from "next/navigation";
import config from "@/histoai.config";

export default async function SetupPage() {
    const isSetup = config.isSetup;
    if (isSetup) {
        redirect("/")
    }
    return <SetupForm />;
}