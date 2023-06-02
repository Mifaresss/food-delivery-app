import { setNewPrice } from '@/store/CardsSlice'
import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux'

export function ProductAmount({ amount, _id }) {
   const dispatch = useDispatch()

   function changeAmountProducts(e) {
      const value = Number(e.target.value)
      if ((value > 0 && value <= 1000) || value === undefined) {
         dispatch(setNewPrice({ amount: value, _id }))
      }
   }

   return (
      <TextField
         type='number'
         value={amount}
         onChange={changeAmountProducts}
         variant='standard'
         sx={{ maxWidth: '55px' }}
         inputProps={{
            min: 1,
            step: 1,
            style: { textAlign: 'center' },
         }}
      />
   )
}
