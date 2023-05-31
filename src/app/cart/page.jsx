'use client'
import { CartProductsList } from '@/components/CartsPageComponents/CartProductsList/CartProductsList'
import { OrderForm } from '@/components/CartsPageComponents/OrderForm/OrderForm'
import { TotalPrice } from '@/components/CartsPageComponents/TotalPrice/TotalPrice'
import s from './page.module.css'

export default function cart() {

	return (
      <div className={s.cartPageContainer}>
         <div className={s.mainContentWrapper}>
            <OrderForm />
            <div className={s.productsSectionWrapper}>
               <CartProductsList />
               <TotalPrice />
            </div>
         </div>
      </div>
   )
}