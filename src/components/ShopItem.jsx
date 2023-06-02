'use client'
import { setRequiredCards } from '@/store/CardsSlice'
import { ListItemButton, ListItemText } from '@mui/material'
import { useDispatch } from 'react-redux'

export function ShopItem({ _id, idList, name }) {
   const dispatch = useDispatch()
   function setRequiredCardsLocal() {
      dispatch(setRequiredCards(idList))
   }

   return (
      <ListItemButton
         _id={_id}
         sx={{
            border: '1px solid rgba(0,0,0,.5)',
            borderColor: 'primary',
            borderRadius: '10px',
            padding: '4px 11px',
         }}
         component='li'
         onClick={setRequiredCardsLocal}
      >
         <ListItemText primary={name} />
      </ListItemButton>
   )
}
