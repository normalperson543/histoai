import LoginForm from "../ui/loginForm"
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { Metadata } from "next";
import { checkSetup } from "@/internal-config";

export const metadata: Metadata = {
  title: "Login"
};
export default async function SignIn() {
  const isSetup = await checkSetup();
  if (!isSetup) {
    redirect('/setup');
  }
  const session = await auth();
  if (session) {
      redirect('/');
  }
  return (
    <LoginForm />
  )
}