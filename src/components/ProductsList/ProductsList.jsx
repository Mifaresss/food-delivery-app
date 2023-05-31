'use client'
// import { fetchCards } from '@/store/cards/cardsSlice'
// import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from '../ProductCard/ProductCard'
import s from './ProductsList.module.css'

export function ProductsList() {

	// const dispatch = useDispatch()
	const cards = useSelector(state => state.cards.filteredCards)

	// useEffect(() => {
   //    dispatch(fetchCards())
   // }, [])

	return cards.length > 0 ? (
      <ul className={s.productsList}>
         {cards.map(card => (
            <ProductCard key={card._id} {...card} />
         ))}
      </ul>
   ) : (
      <p>Loading...</p>
   )
}