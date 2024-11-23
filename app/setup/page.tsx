import SetupForm from "../ui/setup-form";
import { redirect } from "next/navigation";
import { checkSetup } from "@/internal-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup"
};
export default async function SetupPage() {
  const isSetup = await checkSetup();
    if (isSetup) {
        redirect("/")
    }
    return <SetupForm />;
}