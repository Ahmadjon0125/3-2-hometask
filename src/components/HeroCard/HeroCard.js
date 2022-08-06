import "./heroCard.css"

export function HeroCard({text, number}) {
	return (
		<li className="hero-item">
			<p>{text}</p>
			<strong>{number}</strong>
		</li>
	)
}