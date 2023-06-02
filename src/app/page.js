'use client'
import { ProductsList } from '@/components/ProductsList'
import { ShopsMenu } from '@/components/ShopsMenu'
import { store } from '@/store'
import { Provider } from 'react-redux'
import s from './page.module.css'

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
