import React from 'react'

import { Input } from './input'
import date from './date.png'

const InputDate = Input.extend`
  background: #fafafa url(${date}) no-repeat 95% 50%;
  padding-right: 2rem;
`

export const DateInput = ({id,
  value,
  error,
  onChange,
  onBlur,
  ...props
}) => {
  return (
    <InputDate
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      {...props}
    />
  )
}
