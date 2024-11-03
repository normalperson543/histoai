import LoginForm from "../ui/login/login-form"
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export default async function SignIn() {
  const session = await auth();
  if (session) {
      redirect('/');
  }
  return (
    <LoginForm />
  )
}