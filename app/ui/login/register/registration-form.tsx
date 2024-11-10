'use client';
import { useActionState } from 'react';
import { createAccount } from '@/app/lib/actions';
export default function RegistrationForm() {
    const [error, formAction, isPending] = useActionState(createAccount, undefined);
    return (
        <>
            <form
            action={formAction}
            >
                <label>
                    Username
                    <input name="username" type="text" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" />
                </label>
                <label>
                    First name
                    <input name="firstName" type="text" />
                </label>
                <label>
                    Last name
                    <input name="lastName" type="text" />
                </label>
                <button>Register</button>
            </form>
            {
                error && (
                    <div className="bg-red-300 p-3">
                        {error}
                    </div>
                )
            }
        </>
    )
}