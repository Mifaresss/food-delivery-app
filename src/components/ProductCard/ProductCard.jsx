import { AddButton } from '../UI/AddButton/AddButton'
import { ProductPrice } from '../UI/ProductPrice/ProductPrice'
import s from './ProductCard.module.css'

export function ProductCard(card) {

	return (
		<li className={s.card}>
			<p className={s.cardTitle}>{card.title}</p>
			<p className={s.cardDescription}>{card.description}</p>
			<div className={s.wrapperButton}>
				<AddButton card={card} />
				<ProductPrice price={card.price} />
			</div>
		</li>
	)
}