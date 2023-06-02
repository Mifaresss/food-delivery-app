import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './CardsSlice'
import shopsReducer from './ShopsSlice'

export const store = configureStore({
   reducer: {
      cards: cardsReducer,
      shops: shopsReducer,
   },
})
