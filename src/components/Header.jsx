import { AppBar } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { MyLink } from './MyLink'

export function Header() {
   return (
      <AppBar color='header'>
         <div
            className='headerContainer'
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px' }}
         >
            <Link style={{ maxWidth: '4rem' }} href='/'>
               <Image
                  style={{ width: '100%', height: '100%', display: 'block' }}
                  src='/logo.png'
                  width={100}
                  height={100}
                  alt='site logo'
                  priority
               />
            </Link>
            <hr style={{ width: '1px', height: '40px', backgroundColor: 'white' }} />
            <MyLink href='/cart'>Cart</MyLink>
         </div>
      </AppBar>
   )
}
