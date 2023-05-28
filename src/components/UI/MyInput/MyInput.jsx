'use client'
import { useEffect, useState } from 'react'
import s from './MyInput.module.css'

export function MyInput({ type, name, placeholder, title }) {
	let pattern = null
	if (type == 'email') pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
	if (type == 'tel') pattern = '[0-9]{10}'
	if (type == 'text') pattern = '^[\\p{L}]{3,15}$'
	if (name == 'address') pattern = '^.{15,50}$'

	const [value, setValue] = useState('')

	useEffect(() => {
		setValue(localStorage.getItem(name) || '')
	}, [])

	function updateUserData(e) {
		setValue(e.target.value)
		if (!localStorage) return
		localStorage.setItem(name, e.target.value)
	}

	return (
		<input className={s.myInput} name={name} onChange={updateUserData} type={type} placeholder={placeholder} pattern={pattern} required title={title} value={value} />
	)
}