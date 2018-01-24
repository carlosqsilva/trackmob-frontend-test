import React from 'react'
import styled from 'styled-components'

import date from './date.png'

export const Input = styled.input`
  border: 1px solid ${ props => props.error ? "#ff5252":"#d2d2d2"};
  border-radius: 4px;
  background-color: #fafafa;
  appearance: none;
  outline: 0;
  color: #424242;
  padding: 0 .4rem;
  margin-left: 20px;
  font-size: 1.1rem;
  line-height: 2;
  flex: 1;
`

export const TextInput = ({
  id,
  value,
  error,
  onChange,
  onBlur,
  ...props
}) => {
  return (
    <Input
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      {...props}
    />
  )
}

export default Input