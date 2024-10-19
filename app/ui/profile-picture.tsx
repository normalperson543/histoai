export default function SmProfilePicture({username}: {username: string}) {
    return (
        <div className="flex items-center justify-center rounded-full h-8 w-8 text-lg bg-blue-100 p-3 ">
            <div className="">{username.substring(0, 1)}</div>
        </div>
    );
}