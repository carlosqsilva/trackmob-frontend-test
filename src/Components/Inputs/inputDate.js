import React from 'react'
import styled from 'styled-components'

import { Input } from './input'
import date from './date.png'

const InputDate = Input.extend`
  background: #fafafa url(${date}) no-repeat 90% 50%;
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
