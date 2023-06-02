export function ProductPrice({price}) {

	return (
		<span style={{ fontSize: '1.1rem', opacity: '0.9' }}>
			{price + '$'}
		</span>
   )
}