import fs from "fs";
import { promisify } from "util";
import path from "path";
import { fetchUser } from "@/app/lib/data";
import { auth } from "@/auth";
import prisma from "@/app/lib/db";

const readFile = promisify(fs.readFile);

async function read(analysisId: string) {
    try {
        let myFile;
        
        await readFile(path.join(`/images/${analysisId.toString()}.png`))
        .then(
            (file) =>
            {
                myFile = file;
            }
        )
        return new Response(
            myFile
        )
    } catch {
        try {
            let myFile;

            await readFile(path.join(`/images/${analysisId.toString()}.jpg`))
            .then(
                (file) =>
                {
                    myFile = file;
                } 
            )
            return new Response(
                myFile
            )
        } catch {
            return Response.json({"response": "Failed to fetch image"}, {"status": 404});
        }
    }
}
export async function GET( request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id.toString();
    const session = await auth();
    if (!session) {
        return Response.json({"response": "Not authenticated"}, {"status": 401})
    }
    const userId = session.user?.id;
    const fetchedUser = await fetchUser(userId as string);
    if (!fetchedUser) {
        return Response.json({"response": "Forbidden"}, {"status": 403})
    }
    try {
        const attemptToRead = await read(id);
        return attemptToRead;
    } catch {
        return Response.json({"response": "Error with analysis ID, please use the correct analysis ID"}, {"status": 404});
    }
}