import SetupForm from "../ui/setupForm";
import { redirect } from "next/navigation";
import config from "@/histoai.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup"
};
export default async function SetupPage() {
    const isSetup = config.isSetup;
    if (isSetup) {
        redirect("/")
    }
    return <SetupForm />;
}