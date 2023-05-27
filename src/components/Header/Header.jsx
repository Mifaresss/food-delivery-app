import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '../Navigation/Navigation'
import s from './Header.module.css'

export function Header() {

	return (
		<header className={s.header}>
			<div className={s.headerContainer}>
				<Link className={s.logo} href='/'>
					<Image className={s.logoImg} src='/logo.png' width={100} height={100} alt='site logo' priority />
				</Link>
				<Navigation />
			</div>
		</header>
	)
}