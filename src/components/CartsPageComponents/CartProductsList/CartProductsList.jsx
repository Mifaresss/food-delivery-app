'use client'
import { useSelector } from 'react-redux'
import { CartProduct } from '../CartProduct/CartProduct'
import s from './CartProducts.module.css'
import { useEffect, useState } from 'react'

export function CartProductsList() {

	const [products, setProducts] = useState([])
	const productsRedux = useSelector(state => state.cards.cartCards)
	useEffect(() => {
		const localStorageProducts = JSON.parse(localStorage.getItem('cart'))
		if (localStorageProducts?.length) {
			setProducts(localStorageProducts)
		} else {
			setProducts(productsRedux)
		}
	}, [productsRedux])


	return (
		<ul className={s.productsList}>
			{products.length > 0 ? products.map(product => (
				<CartProduct key={product._id} {...product} />))
				:
				<li>You have not added any products yet</li>
			}
		</ul>
	)
}