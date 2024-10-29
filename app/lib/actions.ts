'use server';

import fs from "fs";
import path from "path";
import { promisify } from "util";
import prisma from "./db";

const writeFile = promisify(fs.writeFile);
const { mkdir } = require('node:fs/promises');
const { join } = require('node:path');


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
    
    await writeFile(imagePath, Buffer.from(fileBuffer)); // If this seems to produce an error, it doesn't

    return imagePath;
}
export async function addPatient(formData: FormData) {
    const dateObject = new Date(formData.get("dateOfBirth") as string);
    const dateToISOString = dateObject.toISOString();
    const createdPatient = await prisma.patient.create({
        "data": {
            firstName: formData.get("firstName") as string,
            middleName: formData.get("middleName") as string,
            lastName: formData.get("lastName") as string,
            dateOfBirth: dateToISOString,
            sex: formData.get("sex") as string,
            assignedUser: formData.get("assignedUser") as string
        }
    })
    return createdPatient;
}
export async function deletePatient(patientId: string) {
    const deletedPatient = await prisma.patient.delete({
        "where": {
            id: patientId
        }
    })
    return deletedPatient;
}
export async function submitReport(formData: FormData) {
    const createdReport = await prisma.report.create({
        "data": {
            patientId: formData.get("patientId") as string,
            userId: formData.get("userId") as string,
            containsOSCC: formData.get("containsOSCC") as unknown as boolean,
            confidenceRate: formData.get("confidenceRate") as unknown as number,
            survey: formData.get("survey") as string,
            notes: formData.get("notes") as string
        }
    });
    return createdReport;
}
export async function deleteReport( analysisId: string ) {
    const deletedReport = await prisma.report.delete({
        "where": {
            id: analysisId
        }
    })
    return deletedReport;
}

export async function initImagesDirectory() {
    const projectFolder = './images/';
    const dirCreation = await mkdir(projectFolder, { recursive: true });
    
    return dirCreation;
}