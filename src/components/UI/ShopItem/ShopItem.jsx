'use client'
import { setRequiredCards } from '@/store/cards/cardsSlice'
import { useDispatch } from 'react-redux'
import s from './ShopItem.module.css'

export function ShopItem({ idList, children }) {

	const dispatch = useDispatch()
	function setRequiredCardsLocal() {
		dispatch(setRequiredCards(idList))
	}

	return (
		<li className={s.shopItem} onClick={setRequiredCardsLocal}>
			{children}
		</li>
	)
}