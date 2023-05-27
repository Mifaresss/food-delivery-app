import s from './SubTiitle.module.css'

export function SubTitle({children}) {

	return (
		<h2 className={s.subTitle}>
			{children}
		</h2>
	)
}