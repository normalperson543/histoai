import fs from "fs";
import { promisify } from "util";
import path from "path";
const readFile = promisify(fs.readFile);

async function read(analysisId: string) {
    try {
        let myFile;
        await readFile(path.join(`/images/${analysisId.toString()}.png`))
        .then(
            (file) =>
            {
                console.log("Successful. printing now")
                myFile = file;
            }
        )
        return new Response(
            myFile
        )
    } catch {
        return Response.json({"response": "Failed to fetch image"}, {"status": 404})
    }
}
export async function GET( request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id.toString();
    try {
        
        const attemptToRead = await read(id);
        return attemptToRead;
    } catch {
        return Response.json({"response": "Error with analysis ID, please use the correct analysis ID"}, {"status": 404});
    }
}