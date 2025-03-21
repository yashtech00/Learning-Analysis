import { MainBody } from "./MainBody";
import { NavBar } from "./NavBar";
import { Sidebar } from "./SideBar";


export function  DashboardPage() {
    return (
        <div>
        <NavBar />
        <Sidebar/>
            <MainBody />
            </div>
    )
}