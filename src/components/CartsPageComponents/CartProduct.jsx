'use client'
import { ProductPrice } from '@/components/ProductPrice'
import { removeCardFromCart } from '@/store/cardsSlice'
import { Button, TableCell, TableRow } from '@mui/material'
import { useDispatch } from 'react-redux'
import { ProductAmount } from './ProductAmount'

export function CartProduct(product) {
   const dispatch = useDispatch()
   function removeCardFromCartLocal() {
      dispatch(removeCardFromCart({ _id: product._id }))
   }

   return (
      <TableRow>
         <TableCell sx={{ padding: '10px' }}>{product.title}</TableCell>
         <TableCell sx={{ padding: '10px' }}>{product.description}</TableCell>
         <TableCell sx={{ padding: '10px' }}>
            <ProductAmount amount={product.amount} _id={product._id} />
         </TableCell>
         <TableCell sx={{ padding: '10px' }}>
            <ProductPrice price={product.totalPrice} />
         </TableCell>
         <TableCell sx={{ padding: '10px' }}>
            <Button color='secondary' variant='contained' onClick={removeCardFromCartLocal}>
               &#10008;
            </Button>
         </TableCell>
      </TableRow>
   )
}
