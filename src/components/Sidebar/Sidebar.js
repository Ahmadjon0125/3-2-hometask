import Logo from "../../assets/img/sidebar-logo.svg"
import { SidebarItem } from "../SidebarItem/SidebarItem"

export function Sidebar() {
	return (
		<div className="sidebar-body">
			<img className="sidebar-logo" src={Logo} alt="Logo" />
			<ul>
				<SidebarItem/>
			</ul>
		</div>
	)
}