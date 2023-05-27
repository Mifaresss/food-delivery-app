const { configureStore } = require('@reduxjs/toolkit')
import cardsReducer from './cards/cardsSlice'
import shopsReducer from './shops/shopsSlice'

export const store = configureStore({
   reducer: {
      cards: cardsReducer,
      shops: shopsReducer,
   },
})
