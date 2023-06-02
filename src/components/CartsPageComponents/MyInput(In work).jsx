// 'use client'
// import { TextField } from '@mui/material'
// import { useState } from 'react'

// export const MyInput = props => {
//    const { type, name, placeholder } = props
//    let template = {
//       pattern: '',
//       message: '',
//    }
//    if (type == 'email') {
//       template.pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
//       template.message = 'Please enter a valid email address.'
//    }
//    if (type == 'tel') {
//       template.pattern = /[0-9]{10}/
//       template.message = 'The number should have 10 digits (excluding the country code).'
//    }
//    if (name == 'name') {
//       template.pattern = /^[\p{L}]{3,15}$/
//       template.message = 'The value must consist of 3 to 15 letters.'
//    }
//    if (name == 'address') {
//       template.pattern = /^.{15,50}$/
//       template.message = 'Please enter a value between 15 and 50 characters long.'
//    }

//    // useEffect(() => {
//    // setValue(localStorage.getItem(name) || '')
//    // }, [])
//    const [value, setValue] = useState('')
//    function updateUserData(e) {
//       setValue(e.target.value)
//       // if (typeof window == 'undefined') return
//       // localStorage.setItem(name, e.target.value)
//    }
//    return (
//       <TextField
//          required
//          value={value}
//          onChange={updateUserData}
//          name={name}
//          type={type}
//          label={placeholder}
//          autoComplete='true'
//       />
//    )
// }
