'use client'
import { setCardsToCart } from '@/store/CardsSlice'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

export function AddButton({ card }) {
   const dispatch = useDispatch()
   const cartCards = useSelector(state => state.cards.cartCards)

   function setCardsToCartLocal() {
      dispatch(setCardsToCart({ card }))
   }

   return (
      <Button
         onClick={setCardsToCartLocal}
         sx={{ textTransform: 'none', transitionDuration: '.1s' }}
         variant='outlined'
         size='small'
         disabled={cartCards.find(product => product._id === card._id) ? true : false}
      >
         Add to cart
      </Button>
   )
}
