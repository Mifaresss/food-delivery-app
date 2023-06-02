import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './cardsSlice'
import shopsReducer from './shopsSlice'

export const store = configureStore({
   reducer: {
      cards: cardsReducer,
      shops: shopsReducer,
   },
})
