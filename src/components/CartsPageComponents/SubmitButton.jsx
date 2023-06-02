import { Alert, Button, Snackbar } from '@mui/material'
import { useState } from 'react'

export function SubmitButton({ isProductsAvailable, errors }) {
   const [isOpen, setIsOpen] = useState(false)

   function handleSnackBarShow() {
      if (!isProductsAvailable && !isOpen) {
         setIsOpen(true)

      }
   }
   function handleSnackBarClose(e) {
      if (e?.target?.type !== 'submit') {
         setIsOpen(false)
      }
   }

   return (
      <>
         <Button onClick={handleSnackBarShow} variant='contained' color='primary' type='submit'>
            Submit order
         </Button>
         <Snackbar open={isOpen} autoHideDuration={4000} onClose={handleSnackBarClose}>
            <Alert onClose={handleSnackBarClose} severity='error'>
               Please add items to your cart before placing an order.
            </Alert>
         </Snackbar>
      </>
   )
}
