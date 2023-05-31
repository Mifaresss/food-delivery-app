'use client'
import { useSelector } from 'react-redux'
import { MyInput } from '../../UI/MyInput/MyInput'
import s from './OrderForm.module.css'

export function OrderForm() {

	const cartCards = useSelector(state => state.cards.cartCards)
	const totalPrice = cartCards.reduce((acc, card) => acc += card.totalPrice, 0)
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
			<MyInput type='text' name='name' placeholder='Name' />
			<MyInput type='email' name='email' placeholder='email@domain.etc' title='name@domain.etc' />
			<MyInput type='tel' name='phone' placeholder='Number without +38' />
			<MyInput type='text' name='address' placeholder='Address' />
			<button className={s.submitButton} type='submit'>Submit</button>
		</form>
	)
}