import s from './ProductPrice.module.css'

export function ProductPrice({price}) {

	return (
		<span className={s.productPrice}>
			{price + '$'}
		</span>
	)
}