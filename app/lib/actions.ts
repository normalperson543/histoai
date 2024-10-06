'use server';

import fs from "fs";
import path from "path";
import { promisify } from "util";
import prisma from "./db";

const writeFile = promisify(fs.writeFile);

// https://stackoverflow.com/a/35922073
const today = new Date().toISOString().slice(0, 10);
// Code from Vercel
// Licensed under MIT
// https://github.com/vercel/next.js/blob/canary/examples/server-actions-upload/app/action.ts
export async function uploadImage(formData: FormData) {
    const image = formData.get("file") as File;
    const patientId = formData.get("patientId");
    const analysisId = formData.get("analysisId");
    

    const fileBuffer = await image.arrayBuffer();
    const imagePath = path.join(`/images/Analysis${analysisId}_Patient${patientId}_${today}${path.extname(image.name)}`);
    
    await writeFile(imagePath, Buffer.from(fileBuffer));

    return imagePath;
}
export async function submitReport(
    {
        patientId,
        userId,
        imageLink,
        containsOSCC,
        confidenceRate,
        survey,
        notes
    }:
    {
        patientId: number
        userId: number,
        imageLink: string,
        containsOSCC: boolean,
        confidenceRate: number,
        survey: string,
        notes: string
    }
) {
    const report = prisma.report.create({
        "data": {
            patientId: patientId,
            userId: userId,
            imageLink: imageLink,
            containsOSCC: containsOSCC,
            confidenceRate: confidenceRate,
            survey: survey,
            notes: notes
        }
    });
    return report;
}
export async function deleteReport( analysisId: number ) {
    const deleteReport = prisma.report.delete({
        "where": {
            id: analysisId
        }
    })
    return deleteReport;
}