'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MyLink({ href, children }) {
   const path = usePathname()

   return (
      <Link className={['myLink', path == href && 'active'].join(' ')} href={href}>
         {children}
      </Link>
   )
}
