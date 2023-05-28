import s from './Navigation.module.css'
import { MyLink } from '../UI/MyLink/MyLink'

export function Navigation() {

	return (
		<nav className={s.nav}>
			<ul className={s.navList}>
				<li className={s.navItem}>
					<MyLink href='/cart'>Cart</MyLink>
				</li>
			</ul>
		</nav>
	)
}