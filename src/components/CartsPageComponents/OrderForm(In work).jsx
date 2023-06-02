// 'use client'
// import { Stack } from '@mui/material'
// import { useForm } from 'react-hook-form'
// import { useSelector } from 'react-redux'
// import { MyInput } from './CartsPageComponents/MyInput'
// import { SubmitButton } from './CartsPageComponents/SubmitButton'

// export function OrderForm() {
//    const cartCards = useSelector(state => state.cards.cartCards)
//    const totalPrice = cartCards.reduce((acc, card) => (acc += card.totalPrice), 0)

//    // const { handleSubmit, reset } = useForm()

//    function handleSubmit(e) {
//       e.preventDefault()
//       console.log(e.target.children[0].children[0])
// 		const orderData = [...e.target.children].reduce((acc, input) => {
// 			if (input.tagName === 'INPUT') {
// 				acc[input.name] = input.value
// 			}
// 			return acc
// 		}, {})
// 		orderData.products = cartCards.map(card => [card._id, card.amount])
//       orderData.totalPrice = totalPrice
      
// 		fetch('https://backend-food-delivery-app.herokuapp.com/order', {
//          method: 'POST',
//          headers: {
//             'Content-Type': 'application/json',
//          },
//          body: JSON.stringify(orderData),
//       })
//          .then(response => {
//             if (response.ok) {
//                return response.json()
//             } else {
//                console.error('Ошибка при отправке заказа')
//             }
//          })
//          .then(data => {
//             alert(data)
//          })
//          .catch(error => {
//             console.error('Ошибка при выполнении запроса', error.message)
//          })
// 	}

//    return (
//       <form onSubmit={handleSubmit} style={{ position: 'sticky', top: '85px', height: 'max-content' }}>
//          <Stack spacing={1.5}>
//             <MyInput type='text' name='name' placeholder='Name' />
//             <MyInput type='email' name='email' placeholder='email@domain.etc' title='name@domain.etc' />
//             <MyInput type='tel' name='phone' placeholder='Number without +38' />
//             <MyInput type='text' name='address' placeholder='Address' />
//             <SubmitButton />
//          </Stack>
//       </form>
//    )
// }
