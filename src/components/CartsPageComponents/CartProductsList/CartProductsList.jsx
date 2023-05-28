'use client'
import { useSelector } from 'react-redux'
import { CartProduct } from '../CartProduct/CartProduct'
import s from './CartProducts.module.css'

export function CartProductsList() {

	const productsRedux = useSelector(state => state.cards.cartCards)

	return (
		<ul className={s.productsList}>
			{productsRedux.length > 0 ? productsRedux.map(product => (
				<CartProduct key={product._id} {...product} />))
				:
				<li>You have not added any products yet</li>
			}
		</ul>
	)
}