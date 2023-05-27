'use client'
import { useDispatch, useSelector } from 'react-redux'
import ShopsList from '../ShopsList/ShopsList'
import { ShopItem } from '../UI/ShopItem/ShopItem'
import { SubTitle } from '../UI/SubTitle/SubTitle'
import s from './ShopsMenu.module.css'
import { fetchShops } from '@/store/shops/shopsSlice'
import { useEffect } from 'react'

export function ShopsMenu() {

	const dispatch = useDispatch()
	const shops = useSelector(state => state.shops.shops)
	useEffect(() => {
		dispatch(fetchShops())
	}, [])

	return (
		<aside className={s.shopsMenu}>
			<SubTitle>Shops</SubTitle>
			{shops.length ?
				<ShopsList>
				{shops.map(shop => <ShopItem key={shop._id} idList={shop.productsIdList}>{shop.name}</ShopItem>)}
				</ShopsList>
				:
				<p style={{ marginTop: '.7rem'}}>Loading...</p>
			}
		</aside>
	)
}