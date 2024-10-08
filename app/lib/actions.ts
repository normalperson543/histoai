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
export async function addPatient(formData: FormData) {
    const formEntries = Object.fromEntries(formData.entries());
    const createdPatient = prisma.patient.create({
        "data": {
            firstName: formEntries.firstName,
            middleName: formEntries.middleName,
            lastName: formEntries.lastName,
            dateOfBirth: formEntries.dateOfBirth,
            sex: formEntries.sex,
            assignedUser: formEntries.assignedUser
        }
    })
    return createdPatient;
}
export async function deletePatient(patientId: string) {
    const deletedPatient = prisma.patient.delete({
        "where": {
            id: patientId
        }
    })
    return deletedPatient;
}
export async function submitReport(formData: FormData) {
    const formEntries = Object.fromEntries(formData.entries())
    const createdReport = prisma.report.create({
        "data": {
            patientId: formEntries.patientId,
            userId: formEntries.userId,
            imageLink: formEntries.imageLink,
            containsOSCC: formEntries.containsOSCC,
            confidenceRate: formEntries.confidenceRate,
            survey: formEntries.survey,
            notes: formEntries.notes
        }
    });
    return createdReport;
}
export async function deleteReport( analysisId: string ) {
    const deletedReport = prisma.report.delete({
        "where": {
            id: analysisId
        }
    })
    return deletedReport;
}