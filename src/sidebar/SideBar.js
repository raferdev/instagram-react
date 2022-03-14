import SideUser from "./sideUser/SideUser";
import Suggests from "./suggests/Suggests";
import Links from "./links/Links";
import Copyright from "./copyright/Copyright";
import { user } from "../data/userData";
export default function Sidebar() {
    const [name,login,img] = user;
    return (
        <aside class="sidebar">
            <SideUser name={name} user={login} img={img}/>
            <Suggests />
            <Links />
            <Copyright />
        </aside>
    )
}