"use client";
import { findPatientsUnderUser, findPatientReportsUnderUser, fetchUser } from "../lib/data";
import { auth } from '@/auth';
import { useState } from "react";
import Link from "next/link";
import { FaPerson } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";

export default function SideBar() {
    
    const [isOpen, setIsOpen] = useState(true);

    const className = "bg-hblue w-[20%] transition-[margin-left] ease-in-out duration-500 fixed md:static top-80 bottom-0 left-0 z-40";
    const appendClass = isOpen ? " ml-0" : "ml-[-10%]";

    const PatientItem = ({patient} : {patient:any}) => {
        return(
            <Link href={`dashboard/patients/${patient.id}`} className="flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-hblue-light/10">
                <div className="text=xl flex [&>*]:mx-auto w-[12%]">
                    <FaPerson/>
                </div>
                <div>
                {patient.firstName} {patient.middleName && `${patient.middleName.substring(0,1)}.`} {patient.lastName}
                </div>
            </Link>
        )
    }
    const ReportItem = ({report} : {report:any}) => {
        return(
            <Link href={`dashboard/patients/${report.id}`} className="flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-hblue-light/10">
                <div className="text=xl flex [&>*]:mx-auto w-[12%]">
                    <LuNewspaper/>
                </div>
                <div>
                    {recentReports.indexOf(report) + 1}.
                </div>
            </Link>
        )
    }

    const ModalOverlay = () => {
        return (
            <div className={`flex md:hidden fixed top-80 right-0 bottom-0 left-0 bg-black/50 z-30`}></div>
        )
    }

    return(
        <>
        <div className={`${className}${appendClass}`}>
            <div className="p-2 flex">
                <Link href={"/"}>
                    <img src={"/logo.svg"} alt="Company Logo" width={50} height={50}/>
                </Link>
            </div>
            <div className="flex flex-col">
                <h1>Recent Patients</h1>
                {recentPatients.map((initPatient : any) => {
                    return(
                        <PatientItem patient={initPatient}/>
                    )
                })}
                <h1>Recent Reports</h1>
                {recentReports.map((initReport : any) => {
                    return(
                        <ReportItem report={initReport}/>
                    )
                })}
            </div>
        </div>
        {isOpen ? <ModalOverlay/> : <></>}
        </>
    )
}
const recentPatients = [
    {id:"123", dateCreated: new Date(2024, 4, 22), firstName:"Rayyan", middleName:"Midhat Abdul", lastName: "Khalique", dateOfBirth: new Date(2024, 5, 5), sex: "make", assignedUser: "Rayyan"},
    {id:"123", dateCreated: new Date(2024, 4, 22), firstName:"Rayyan", middleName:"Midhat Abdul", lastName: "Khalique", dateOfBirth: new Date(2024, 5, 5), sex: "make", assignedUser: "Rayyan"},
    {id:"123", dateCreated: new Date(2024, 4, 22), firstName:"Rayyan", middleName:"Midhat Abdul", lastName: "Khalique", dateOfBirth: new Date(2024, 5, 5), sex: "make", assignedUser: "Rayyan"}
]
const recentReports = [
    {id:"222", dateGenerated: new Date(2024, 6, 6), patientId:"123", userId:"3333", containsOSCC: true, confidenceRate: 5.4, survey:"hello", notes: "hello world"},
    {id:"222", dateGenerated: new Date(2024, 6, 6), patientId:"123", userId:"3333", containsOSCC: true, confidenceRate: 5.4, survey:"hello", notes: "hello world"},
    {id:"222", dateGenerated: new Date(2024, 6, 6), patientId:"123", userId:"3333", containsOSCC: true, confidenceRate: 5.4, survey:"hello", notes: "hello world"}
]