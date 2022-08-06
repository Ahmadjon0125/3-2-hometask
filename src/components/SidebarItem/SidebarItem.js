import Overview from "../../assets/img/overview.svg"
import Tickets from "../../assets/img/tickets.svg"
import Ideas from "../../assets/img/ideas.svg"
import Contacts from "../../assets/img/contacts.svg"
import Agents from "../../assets/img/agents.svg"
import Articles from "../../assets/img/articles.svg"
import Settings from "../../assets/img/settings.svg"
import Subscription from "../../assets/img/subscription.svg"

import "./sidebar.css"

export function SidebarItem() {
	return (
		<>
			<li className="sidebar-item">
				<img src={Overview} alt="Overview" />
				<p>Overview</p>
			</li>
			<li className="sidebar-item">
				<img src={Tickets} alt="tickets" />
				<p>Tickets</p>
			</li>
			<li className="sidebar-item">
				<img src={Ideas} alt="Ideas" />
				<p>Ideas</p>
			</li>
			<li className="sidebar-item">
				<img src={Contacts} alt="Contacts" />
				<p>Contacts</p>
			</li>
			<li className="sidebar-item">
				<img src={Agents} alt="Agents" />
				<p>Agents</p>
			</li>
			<li className="sidebar-item">
				<img src={Articles} alt="Articles" />
				<p>Articles</p>
			</li>
			<li className="sidebar-item">
				<img src={Settings} alt="Settings" />
				<p>Settings</p>
			</li>
			<li className="sidebar-item">
				<img src={Subscription} alt="Subscription" />
				<p>Subscription</p>
			</li>
		</>
	)
}