import React from 'react'
import styled from 'styled-components'

import date from './date.png'

export const Input = styled.input`
  ${props => props.fluid && "flex: 1"};
  ${props => props.large && "max-width: 310px"};
  ${props => props.normal && "max-width: 200px"};
  ${props => props.small && "max-width: 100px"};
  border: 1px solid ${ props => props.error ? "#ff5252":"#d2d2d2"};
  min-width: 40px;
  border-radius: 4px;
  background-color: #fafafa;
  appearance: none;
  outline: 0;
  color: #424242;
  padding: 0 .4rem;
  margin-left: 20px;
  font-size: 1.1rem;
  line-height: 2;

  @media screen and (max-width: 550px) {
    margin: 15px 0px 0px 0px;
  }
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