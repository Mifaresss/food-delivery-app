'use client'
import { ProductsList } from '@/components/ProductsList/ProductsList'
import { ShopsMenu } from '@/components/ShopsMenu/ShopsMenu'
import { Provider } from 'react-redux'
import s from './page.module.css'
import { store } from '@/store'

export default function Home() {
   return (
      <Provider store={store}>
         <main className={s.main}>
            <div className={s.mainContainer}>
               <ShopsMenu />
               <ProductsList />
            </div>
         </main>
      </Provider>
   )
}
