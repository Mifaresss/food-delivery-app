'use client'
import { fetchCards } from '@/store/cardsSlice'
import { CircularProgress, List } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from './ProductCard'

export function ProductsList() {
   const dispatch = useDispatch()
   const cards = useSelector(state => state.cards.filteredCards)

   useEffect(() => {
      dispatch(fetchCards())
   }, [])

   return cards.length > 0 ? (
      <List
         sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            padding: '20px',
            border: '4px dashed rgb(25, 118, 210)',
            borderRadius: '10px',
            borderColor: 'primary.main',
         }}
      >
         {cards.map(card => (
            <ProductCard key={card._id} {...card} />
         ))}
      </List>
   ) : (
      <CircularProgress color='primary' />
   )
}
