'use server';

import fs from "fs";
import path from "path";
import { promisify } from "util";
import prisma from "./db";
import { signIn, register } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

// https://stackoverflow.com/a/35922073
const today = new Date().toISOString().slice(0, 10);
// Code from Vercel
// Licensed under MIT
// https://github.com/vercel/next.js/blob/canary/examples/server-actions-upload/app/action.ts
export async function uploadImage(image: File, patientId: string, analysisId: string) {
    const fileBuffer = await image.arrayBuffer();
    const imagePath = path.join(`/images/${analysisId}${path.extname(image.name)}`);
    await writeFile(imagePath, Buffer.from(fileBuffer)); // If this seems to produce an error, it doesn't
    return imagePath;
}
export async function addPatient(authId: string, formData: FormData) {
    const dateObject = new Date(formData.get("dateOfBirth") as string);
    const dateToISOString = dateObject.toISOString();
    const createdPatient = await prisma.patient.create({
        "data": {
            firstName: formData.get("firstName") as string,
            middleName: formData.get("middleName") as string,
            lastName: formData.get("lastName") as string,
            dateOfBirth: dateToISOString,
            sex: formData.get("sex") as string,
            assignedUser: authId
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
export async function submitReport(userId: string, osccDetected: boolean, confidence: number, formData: FormData) {
        const image = formData.get("imageFile");
        const createdReport = await prisma.report.create({
            "data": {
                patientId: formData.get("patientId") as string,
                userId: userId,
                containsOSCC: osccDetected,
                confidenceRate: confidence,
                survey: "",
                notes: "",
            }
        });
        const imagePath = await uploadImage(image as File, formData.get("patientId") as string, createdReport.id);
        redirect(`/dashboard/reports/${createdReport.id}`)
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
//https://github.com/vercel/next-learn/blob/main/dashboard/final-example/app/lib/actions.ts
export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                return 'The username or password you entered was incorrect. Please try again.';
                default:
                return 'Something went wrong. Please try again later.';
            }
        }
    }
    redirect('/dashboard');
}
export async function createAccount(prevState: string | undefined, formData: FormData) {
    try {
        await register(formData);
        redirect('/login');
    } catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
    }
}
export async function completeSetup(prevState: string|undefined, formData: FormData) {
    await createAccount(undefined, formData);
    try {
        await initImagesDirectory();
    } catch {
        return "Something went wrong creating the images directory.";
    }
    try {
        await setSetupStatus();
    } catch {
        return "Something went wrong completing setup.";
    }
    redirect("/login");
}
export async function setSetupStatus() {
    await writeFile(".setup", ""); 
    return true;
}