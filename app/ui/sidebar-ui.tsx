"use client";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { findPatientsUnderUser, findPatientReportsUnderUser, fetchUser } from "../lib/data";
import { auth } from '@/auth';
import { useState } from "react";
import Link from "next/link";
import { FaPerson } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";
export default function SideBarUI(recentPatients: {
    id: string;
    firstName: string;
    middleName: string | null;
    lastName: string;
    dateCreated: Date;
    dateOfBirth: Date;
    sex: string;
    assignedUser: string;
}[], recentReports: any) {
    const [patientsOpen, setPatientsOpen] = useState(false);
    const [reportsOpen, setReportsOpen] = useState(false);
    const patientAuxClassName = patientsOpen ? "" : "hidden [&>*]:hidden";
    const reportAuxClassName = reportsOpen ? "" : " hidden";
    const className = "bg-hblue-dark text-white w-[20%] md:static bottom-0 z-40 h-full";
    const PatientItem = ({patient} : {patient:any}) => {
        return(
            <Link href={`dashboard/patients/${patient.id}`} className={`flex gap-1 [&>*]:my-auto ml-[15%] text-md py-3 ${patientAuxClassName} w-full`}>
                <div className="flex [&>*]:mx-auto w-[15%]">
                    <FaPerson/>
                </div>
                <div className="w-[60%]">
                {patient.firstName} {patient.middleName && `${patient.middleName.substring(0,1)}.`} {patient.lastName}
                </div>
            </Link>
        )
    }
    const ReportItem = ({report} : {report:any}) => {
        return(
            <Link href={`dashboard/patients/${report.id}`} className={`flex gap-1 [&>*]:my-auto ml-[15%] text-md py-3 border-b-[1px] border-b-hblue-light/10${reportAuxClassName} w-full`}>
                <div className="flex [&>*]:mx-auto w-[15%]">
                    <LuNewspaper/>
                </div>
                <div className="w-[60%]">
                    {recentReports.indexOf(report) + 1}.
                </div>
            </Link>
        )
    }

    const ModalOverlay = () => {
        return (
            <div className={`flex md:hidden top-80 right-0 bottom-0 left-0 bg-black/50 z-30`}></div>
        )
    }

    return(
        <>
        <div className={`${className}`}>
            <div className="flex flex-col ">
                <div className="flex col-2 gap-1 [&>*]:my-auto ml-[15%] text-md py-3 border-b-[1px] border-b-hblue-light/10" onClick={() => setPatientsOpen(!patientsOpen)}>
                    <p className="text-left">Recent Patients</p>
                    <div className="flex-grow relative">
                        {patientsOpen ? <SlArrowUp className="absolute top-0 bottom-0 right-0 left-0 m-auto"/> : <SlArrowDown className="absolute top-0 bottom-0 right-0 left-0 m-auto"/>}
                    </div>
                    
                </div>
                {recentPatients.map((initPatient : any) => {
                    return(
                        <PatientItem patient={initPatient} key={`Patient ${recentPatients.indexOf(initPatient)}`}/>
                    )
                })}
                <div className="flex col-2 gap-1 [&>*]:my-auto ml-[15%] text-md py-3 border-b-[1px] border-b-hblue-light/10" onClick={() => setReportsOpen(!reportsOpen)}>
                    <p className="text-left">Recent Reports</p>
                    <div className="flex-grow relative">
                        {reportsOpen ? <SlArrowUp className="absolute top-0 bottom-0 right-0 left-0 m-auto"/> : <SlArrowDown className="absolute top-0 bottom-0 right-0 left-0 m-auto"/>}
                    </div>
                    
                </div>
                {recentReports.map((initReport : any) => {
                    return(
                        <ReportItem report={initReport} key={`Patient ${recentReports.indexOf(initReport)}`}/>
                    )
                })}
            </div>
        </div>
        <ModalOverlay/>
        </>
    )
}