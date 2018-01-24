import React from 'react'
import styled from 'styled-components'

const Check = styled.input`
  outline: none;
  width: 15px;
  height: 15px;
  background-color: #fafafa;
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  margin-right: 10px;
`

const CheckWrapper = styled.label`
  font-size: .9rem;
  color: #9e9e9e;
  display: inline-flex;
  align-items: center;
  margin: 20px 0;
`

export const CheckBox = (props) => {
  const { id, checked, onChange } = props
  return (
    <CheckWrapper >
      <Check id={id} type="checkbox" checked={checked} onChange={onChange} />
      {props.children}
    </CheckWrapper>
  )
}