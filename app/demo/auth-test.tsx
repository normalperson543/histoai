import { auth, signOut } from "@/auth";
export default async function AuthTest() {
    const session = await auth();
    return (
        <>
            <p>Current session details: {JSON.stringify(session)}</p>
            <form
        action={async () => {
            "use server"
            await signOut()
        }}
        >
                <button type="submit">Sign Out</button>
            </form>
        </>
    )
}