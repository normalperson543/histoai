'use client';

import { authenticate } from '../../lib/actions';
import { useActionState } from 'react';

export default function LoginForm() {
    const [error, formAction, isPending] = useActionState(authenticate, undefined);
    return (
        <>
            <h2>Welcome to HistoAI. Please log in.</h2>
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
                <button>{isPending ? "Signing in..." : "Sign in"}</button>
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