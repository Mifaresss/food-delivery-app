'use client'
import { setCardsToCart } from '@/store/cards/cardsSlice'
import { useDispatch, useSelector } from 'react-redux'
import s from './AddButton.module.css'

export function AddButton({ card }) {

	const dispatch = useDispatch()
	const cartCards = useSelector(state => state.cards.cartCards)

	function setCardsToCartLocal() {
		dispatch(setCardsToCart({ card }))
	}

	return (
		<button className={s.addButton} disabled={cartCards.find(product => product._id === card._id) ? true : false} onClick={setCardsToCartLocal}>Add to cart</button>
	)
}