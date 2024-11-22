import LoginForm from "../ui/loginForm"
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import config from "@/histoai.config";

export default async function SignIn() {
  const isSetup = config.isSetup;
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