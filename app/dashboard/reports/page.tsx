import { findAllReports } from '@/app/lib/data';
import { fetchPatient } from '@/app/lib/data';
import ReportList from '@/app/ui/dashboard/reports/report-list';
import ReportItem from '@/app/ui/dashboard/reports/report-item';
import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports"
};
export default async function ReportPage() {
  const reports = await findAllReports();
  const reportItems = reports.map(async obj => {
    const patient = await fetchPatient(obj.patientId);
    return (<ReportItem report={obj} patient={patient}/>)
  })
  return (
    <Suspense fallback={<CircularProgress />}>
      <ReportList reports={reports} reportItems={reportItems} />
    </Suspense>
  );
}