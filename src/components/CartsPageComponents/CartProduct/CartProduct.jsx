'use client'
import { ProductPrice } from '@/components/UI/ProductPrice/ProductPrice'
import { removeCardFromCart, setNewPrice } from '@/store/cards/cardsSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import s from './CartProduct.module.css'

export function CartProduct(product) {

	const [amount, setAmount] = useState(1)

	const dispatch = useDispatch()
	function removeCardFromCartLocal() {
		dispatch(removeCardFromCart({ _id: product._id }))
	}

	function changeAmountProducts(e) {
		const value = e.target.value
		if (value > 0 && value <= 1000 || value === undefined) {
			setAmount(value)
			dispatch(setNewPrice({ amount: Number(value), _id: product._id }))
		}

	}

	return (
		<li className={s.productWrapper}>
			<p className={s.productTitle}>{product.title}</p>
			<p className={s.productDescription}>{product.description}</p>
			<input className={s.productAmount} type="number" value={amount} onChange={changeAmountProducts} />
			<ProductPrice price={product.totalPrice} />
			<button className={s.deleteProductButton} onClick={removeCardFromCartLocal}>&#10008;</button>
		</li>
	)
}