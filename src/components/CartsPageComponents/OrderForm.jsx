'use client'
import { Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { MyInput } from './MyInput'
import { SubmitButton } from './SubmitButton'

export function OrderForm() {
   const cartCards = useSelector(state => state.cards.cartCards)
   const totalPrice = cartCards.reduce((acc, card) => (acc += card.totalPrice), 0)

   const [isProductsAvailable, setIsProductsAvailable] = useState(false)
   useEffect(() => {
      setIsProductsAvailable(cartCards.length > 0)
   }, [cartCards])

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({ mode: 'onChange' })

   function onSubmit(orderData) {
      if (cartCards.length) {
         orderData.products = cartCards.map(card => [card._id, card.amount])
         orderData.totalPrice = totalPrice

         fetch('https://backend-food-delivery-app.herokuapp.com/order', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
         })
            .then(response => {
               if (response.ok) {
                  return response.json()
               } else {
                  console.error('Error sending order')
               }
            })
            .then(data => {
               alert(data)
            })
            .catch(error => {
               console.error('Error while executing request', error.message)
            })
         reset()
      }
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ position: 'sticky', top: '85px', height: 'max-content' }} autoComplete='on'>
         <Stack spacing={1.5}>
            <MyInput register={register} type='text' name='name' placeholder='Name' errors={errors} />
            <MyInput register={register} type='email' name='email' placeholder='email@domain.etc' errors={errors} />
            <MyInput register={register} type='tel' name='phone' placeholder='Number without "+38"' errors={errors} />
            <MyInput register={register} type='text' name='address' placeholder='Address' errors={errors} />
            <SubmitButton isProductsAvailable={isProductsAvailable} />
         </Stack>
      </form>
   )
}
