'use client'
import { TextField } from '@mui/material'
import { useState } from 'react'

export const MyInput = props => {
   const { type, name, placeholder, register, errors } = props
   let template = {
      pattern: null,
      message: '',
   }
   if (type == 'email') {
      template.pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      template.message = 'Please enter a valid email address.'
   }
   if (type == 'tel') {
      template.pattern = /^[0-9]{10}$/
      template.message = 'The number should have 10 digits (excluding the country code).'
   }
   if (name == 'name') {
      template.pattern = /^[a-zA-Zа-яА-ЯёЁ\s]{3,20}$/
      template.message = 'The value must consist of 3 to 20 letters.'
   }
   if (name == 'address') {
      template.pattern = /^.{15,50}$/
      template.message = 'Please enter a value between 15 and 50 characters long.'
   }

   return (
      <TextField
         {...register(name, {
            required: true,
            pattern: {
               value: template.pattern,
               message: template.message,
            },
         })}
         error={!!errors[name]}
         helperText={errors[name]?.message}
         type={type}
         label={placeholder}
         autoComplete='true'
      />
   )
}
