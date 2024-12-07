'use server';
import prisma from "./db";
import { promisify } from "util";

export async function fetchUser(userId: string) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
    return user;
}

export async function fetchPatient(patientId: string) {
    const patient = await prisma.patient.findUnique({
        where: {
            id: patientId
        }
    })
    return patient;
}

export async function fetchReport(reportId: string) {
    const report = await prisma.report.findUnique({
        where: {
            id: reportId
        }
    })
    return report;
}

export async function findPatientReportsUnderUser(userId: string, skip: number, take: number) {
    const reports = await prisma.report.findMany({
        where: {
            userId: userId
        },
        orderBy: {
            dateGenerated: 'desc'
        },
        skip: skip,
        take: take
    })
    return reports;
}
export async function findPatientReportsUnderPatient(patientId: string) {
    const reports = await prisma.report.findMany({
        where: {
            patientId: patientId
        },
        orderBy: {
            dateGenerated: 'desc'
        }
    })
    return reports;
}
export async function findPatientsUnderUser(userId: string, skip: number, take: number) {
    const patients = await prisma.patient.findMany({
        where: {
            assignedUser: userId
        },
        orderBy: {
            dateCreated: 'desc'
        },
        skip: skip,
        take: take
    })
    return patients;
}
export async function findAllPatients() {
    const patients = await prisma.patient.findMany({
        orderBy: {
            dateCreated: 'desc'
        },
    });
    return patients;
}
export async function findSomePatients() {
    const patients = await prisma.patient.findMany({
        skip: 0,
        take: 5,
        orderBy: {
            dateCreated: 'desc'
        },
    });
    return patients;
}
export async function findSomeReports() {
    const patients = await prisma.report.findMany({
        skip: 0,
        take: 5,
        orderBy: {
            dateGenerated: 'desc'
        },
    });
    return patients;
}
export async function findAllReports() {
    const reports = await prisma.report.findMany({
        orderBy: {
            dateGenerated: 'desc'
        },
    });
    return reports;
}