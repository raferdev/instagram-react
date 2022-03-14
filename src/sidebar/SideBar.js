import SideUser from "./sideUser/SideUser";
import Suggests from "./suggests/Suggests";
import Links from "./links/Links";
import Copyright from "./copyright/Copyright";
export default function Sidebar() {
    return (
        <div class="sidebar">
            <SideUser />
            <Suggests />
            <Links />
            <Copyright />
        </div>
    )
}