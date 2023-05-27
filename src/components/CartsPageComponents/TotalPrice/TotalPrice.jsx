'use client'
import { useDispatch, useSelector } from 'react-redux'
import s from './TotalPrice.module.css'

export function TotalPrice() {

	const dispatch = useDispatch()
	const cartCards = useSelector(state => state.cards.cartCards)

	const totalPrice = cartCards.reduce((acc, card) => acc += card.totalPrice, 0)

	return (
		<p className={s.totalPrice}>
			Total price: <span>{totalPrice + '$'}</span>
		</p>
	)
}