import SideBarUI from "@/app/ui/sidebar-ui";
import { findSomePatients, findSomeReports } from "../lib/data";
export default async function Sidebar() {
    const recentPatients = await findSomePatients();
    const recentReports = await findSomeReports();
    return <SideBarUI recentPatients={recentPatients} recentReports={recentReports} />;
}