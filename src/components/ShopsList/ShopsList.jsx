import s from './ShopsList.module.css'

export default function ShopList({children}) {

	return (
		<ul className={s.shopsList}>
			{children}
		</ul>
	)
}