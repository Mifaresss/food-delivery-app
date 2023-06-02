'use client'
import { fetchShops } from '@/store/shopsSlice'
import { Box, CircularProgress, List, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ShopItem } from './ShopItem'

export function ShopsMenu() {
   const dispatch = useDispatch()
   const shops = useSelector(state => state.shops.shops)
   useEffect(() => {
      dispatch(fetchShops())
   }, [])

   return (
      <Box
         component='aside'
         border={2}
         borderColor='primary.main'
         borderRadius={2}
         height='max-content'
         position='sticky'
         top='85px'
         sx={{
            padding: '13px 18px 18px 18px',
         }}
      >
         <Typography variant='h4' component='h2' fontWeight={500} marginBottom={1}>
            Shops
         </Typography>
         <List
            sx={{
               display: 'flex',
               flexDirection: 'column',
               gap: '8px',
               padding: '0',
            }}
         >
            {shops.length > 0 ? (
               shops.map(shop => (
                  <ShopItem key={shop._id} _id={shop._id} idList={shop.productsIdList} name={shop.name} />
               ))
            ) : (
               <CircularProgress color='inherit' />
            )}
         </List>
      </Box>
   )
}
