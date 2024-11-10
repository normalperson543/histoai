import LoginForm from "../ui/loginForm"
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