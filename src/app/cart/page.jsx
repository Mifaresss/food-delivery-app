'use client'
import { CartProductsList } from '@/components/CartsPageComponents/CartProductsList'
import { TotalPrice } from '@/components/CartsPageComponents/TotalPrice'
import { store } from '@/store'
import { Provider } from 'react-redux'
import s from './page.module.css'
import { OrderFormOld } from '@/components/CartsPageComponents/OrderFormOld/OrderFormOld'

export default function cart() {
   return (
      <Provider store={store}>
         <div className={s.cartPageContainer}>
            <div className={s.mainContentWrapper}>
               <div className={s.productsSectionWrapper}>
                  <CartProductsList />
                  <TotalPrice />
               </div>
               <OrderFormOld />
            </div>
         </div>
      </Provider>
   )
}