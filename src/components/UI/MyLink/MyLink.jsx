'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import s from './MyLink.module.css'

export function MyLink({ href, children }) {

	const path = usePathname()

	return (
		<Link className={[s.myLink, path == href ? s.active : ''].join(' ')} href={href}>
			{children}
		</Link>
	)
}
