import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchShops = createAsyncThunk('shops/fetchShops', async function () {
	const response = await fetch('https://backend-food-delivery-app.herokuapp.com/stores')
	const data = await response.json()
	const shops = data.map(shop => ({
		_id: shop._id,
		name: shop.name,
		productsIdList: shop.products.map((product) => product._id)
	}))
	return shops
})


const shopsSlice = createSlice({
	name: 'shops',
	initialState: {
		shops: [],
	},
	reducers: {

	},
	extraReducers: builder => {
		builder.addCase(fetchShops.pending, state => {
         state.status = 'pending'
      })
      builder.addCase(fetchShops.fulfilled, (state, action) => {
         state.status = 'resolved'
         state.shops = action.payload
      })
	}
})

export default shopsSlice.reducer