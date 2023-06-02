'use client'
import { useSelector } from 'react-redux'
import { MyInputOld } from '../MyInputOld/MyInputOld'
import s from './OrderFormOld.module.css'

export function OrderFormOld() {
   const cartCards = useSelector(state => state.cards.cartCards)
   const totalPrice = cartCards.reduce((acc, card) => (acc += card.totalPrice), 0)
   function handleSubmit(e) {
      e.preventDefault()
      const orderData = [...e.target.children].reduce((acc, input) => {
         if (input.tagName === 'INPUT') {
            acc[input.name] = input.value
         }
         return acc
      }, {})
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
               console.error('Ошибка при отправке заказа')
            }
         })
         .then(data => {
            alert(data)
         })
         .catch(error => {
            console.error('Ошибка при выполнении запроса', error.message)
         })
   }

   return (
      <form onSubmit={handleSubmit} className={s.form}>
         <MyInputOld type='text' name='name' placeholder='Name' />
         <MyInputOld type='email' name='email' placeholder='email@domain.etc' title='name@domain.etc' />
         <MyInputOld type='tel' name='phone' placeholder='Number without +38' />
         <MyInputOld type='text' name='address' placeholder='Address' />
         <button className={s.submitButton} type='submit'>
            Submit
         </button>
      </form>
   )
}
