'use client'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CartProduct } from './CartProduct'
import { ProductsMissing } from './ProductsMissing'

export function CartProductsList() {
   const [products, setProducts] = useState([])
   const productsRedux = useSelector(state => state.cards.cartCards)

   useEffect(() => {
      setProducts(productsRedux)
   }, [productsRedux])

   return products.length > 0 ? (
      <TableContainer component={Paper}>
         <Table aria-label='cart table'>
            <TableHead>
               <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Delete</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {products.map(product => (
                  <CartProduct key={product._id} {...product} />
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   ) : (
      <ProductsMissing />
   )
}
