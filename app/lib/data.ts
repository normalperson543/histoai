import prisma from "./db";

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
export async function findAllPatients(skip: number, take: number) {
    const patients = prisma.patient.findMany({
        orderBy: {
            dateCreated: 'desc'
        },
        skip: skip,
        take: take
    });
    return patients;
}