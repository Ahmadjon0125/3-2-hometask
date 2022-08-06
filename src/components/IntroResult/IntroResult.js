import "./introResult.css"

export function IntroResult({texts, numbers}) {
	return (
		<li className="intro-result-item">
			<p className="intro-result-text">{texts}</p>
			<strong className="intro-result-number">{numbers}</strong>
		</li>
	)
}