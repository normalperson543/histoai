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

export async function findAllPatientReports(patientId: string) {
    const reports = await prisma.report.findMany({
        where: {
            patientId: patientId
        }
    })
    return reports;
}
export async function findAllPatientsUnderUser(userId: string) {
    const patients = await prisma.patient.findMany({
        where: {
            assignedUser: userId
        }
    })
    return patients;
}