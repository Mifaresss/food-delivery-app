import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCards = createAsyncThunk('cards/fetchCards', async function () {
   const response = await fetch('http://localhost:5000/stores')
   const data = await response.json()
   const cards = data.flatMap(shop => shop.products)
   return cards
})

const saveCartToLocalStorage = cart => {
   localStorage.setItem('cart', JSON.stringify(cart))
}

const cardsSlice = createSlice({
   name: 'cards',
   initialState: {
      originalCards: [],
      filteredCards: [],
      cartCards: JSON.parse(localStorage.getItem('cart')) || [],
   },
   reducers: {
      setRequiredCards(state, action) {
         state.filteredCards = state.originalCards.filter(card => {
            return action.payload.includes(card._id)
         })
      },
      setCardsToCart(state, { payload }) {
         const { card } = payload
         const { price } = card
         const amount = 1
         state.cartCards.push({ ...card, totalPrice: price * amount, amount })
         saveCartToLocalStorage(state.cartCards)
      },
      removeCardFromCart(state, action) {
         const desiredIndex = state.cartCards.findIndex(card => card._id === action.payload._id)
         if (desiredIndex !== -1) state.cartCards.splice(desiredIndex, 1)
         saveCartToLocalStorage(state.cartCards)
      },
      setNewPrice(state, { payload }) {
         const card = state.cartCards.find(card => card._id == payload._id)
         card.amount = payload.amount
         card.totalPrice = card.price * payload.amount
         saveCartToLocalStorage(state.cartCards)
      },
   },
   extraReducers: builder => {
      builder.addCase(fetchCards.pending, state => {
         state.status = 'pending'
      })
      builder.addCase(fetchCards.fulfilled, (state, action) => {
         state.status = 'resolved'
         state.originalCards = action.payload
         state.filteredCards = action.payload
         saveCartToLocalStorage(state.cartCards)
      })
   },
})

const savedCart = localStorage.getItem('cart')
if (savedCart) {
   cardsSlice.reducer({ cartCards: JSON.parse(savedCart) }, {})
}

export const { setRequiredCards, setCardsToCart, removeCardFromCart, setNewPrice } = cardsSlice.actions
export default cardsSlice.reducer
