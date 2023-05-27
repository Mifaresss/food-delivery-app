import { useDispatch, useSelector } from 'react-redux'
import s from './ShopItem.module.css'
import { setRequiredCards } from '@/store/cards/cardsSlice'

export function ShopItem({idList, children}) {

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