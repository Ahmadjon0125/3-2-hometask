import "./all.css"

export function All({title, button,clas}) {
	return (
		<li className="all-item">
			<input className="all-input" type="checkbox" />
			<h3 className="all-item-title">{title}</h3>
			<button className={clas} type="button">{button}</button>
		</li>
	)
}