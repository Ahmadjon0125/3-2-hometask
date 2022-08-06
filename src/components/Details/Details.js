import "./details.css"

export function Details({dText, dNum}) {
	return (
		<li className="details-item">
			<h3 className="details-title">{dText}</h3>
			<p className="details-text">{dNum}</p>
		</li>
	)
}