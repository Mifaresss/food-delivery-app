'use client'
import { ProductsList } from '@/components/ProductsList/ProductsList'
import { ShopsMenu } from '@/components/ShopsMenu/ShopsMenu'
import s from './page.module.css'

export default function Home() {
   return (
      <main className={s.main}>
         <div className={s.mainContainer}>
            <ShopsMenu />
            <ProductsList />
         </div>
      </main>
   )
}
