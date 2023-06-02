'use client'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function TotalPrice() {
   const [totalPrice, setTotalPrice] = useState(0)
   const [isShow, setIsShow] = useState(false)
   const cartCards = useSelector(state => state.cards.cartCards)

   useEffect(() => {
      const totalPrice = cartCards.reduce((acc, card) => (acc += card.totalPrice), 0)
      setTotalPrice(totalPrice)

      setIsShow(cartCards.length)
   }, [cartCards])

   return isShow ? (
      <Typography
         variant='h6'
         component='p'
         sx={{
            maxWidth: 'max-content',
            p: '5px 12px',
            backgroundColor: '#E3F9AF',
            border: '1px solid #3B7210',
            borderRadius: '7px',
         }}
      >
         Total price: {totalPrice + '$'}
      </Typography>
   ) : (
      <></>
   )
}
