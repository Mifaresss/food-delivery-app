import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { data } from '@/DATA'

// export const fetchShops = createAsyncThunk('shops/fetchShops', async function () {
// 	const response = await fetch('http://localhost:5000/stores')
// 	const data = await response.json()
// 	const shops = data.map(shop => ({
// 		_id: shop._id,
// 		name: shop.name,
// 		productsIdList: shop.products.map((product) => product._id)
// 	}))
// 	return shops
// })
const shops = data.map(shop => ({
   _id: shop._id,
   name: shop.name,
   productsIdList: shop.products.map(product => product._id),
}))


const shopsSlice = createSlice({
   name: 'shops',
   initialState: {
      shops,
   },
   reducers: {},
   // extraReducers: builder => {
   // 	builder.addCase(fetchShops.pending, state => {
   //       state.status = 'pending'
   //    })
   //    builder.addCase(fetchShops.fulfilled, (state, action) => {
   //       state.status = 'resolved'
   //       state.shops = action.payload
   //    })
   // }
})

export default shopsSlice.reducer