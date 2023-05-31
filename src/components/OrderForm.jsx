'use client'
import { Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { MyInput } from './UI/MyInput/MyInput'

export function OrderForm() {
   const cartCards = useSelector(state => state.cards.cartCards)
   const totalPrice = cartCards.reduce((acc, card) => (acc += card.totalPrice), 0)

   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm()

   function onSubmit(e) {
      const orderData = [...e.target.children].reduce((acc, input) => {
         if (input.tagName === 'INPUT') {
            acc[input.name] = input.value
         }
         return acc
      }, {})

      orderData.products = cartCards.map(card => [card._id, card.amount])
      orderData.totalPrice = totalPrice
      // fetch('http://localhost:5000/order', {
      // 	method: 'POST',
      // 	headers: {
      // 		"Content-Type": "application/json",
      // 	},
      // 	body: JSON.stringify(orderData)
      // })
      // 	.then(response => {
      // 		if (response.ok) {
      // 			return response.json()
      // 		} else {
      // 			console.error('Ошибка при отправке заказа')
      // 		}
      // 	})
      // 	.then(data => {
      // 		alert(data)
      // 	})
      // 	.catch(error => {
      // 		console.error('Ошибка при выполнении запроса', error.message)
      // 	})
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Stack
            spacing={1}
            sx={{
               p: '20px',
               border: '2px solid orange',
               borderRadius: '10px',
               mb: '10px',
            }}
         >
            <MyInput {...register('name')} type='text' name='name' placeholder='Name' />
            <MyInput
               {...register('email')}
               type='email'
               name='email'
               placeholder='email@domain.etc'
               title='name@domain.etc'
            />
            <MyInput {...register('phone')} type='tel' name='phone' placeholder='Number without +38' />
            <MyInput {...register('address')} type='text' name='address' placeholder='Address' />
         </Stack>
         <input type='submit' value='Submit Order' />
      </form>
   )
}
