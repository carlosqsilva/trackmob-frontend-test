import React from 'react'
import styled from 'styled-components'

export const Label = styled.label`
  color: ${props => props.error ? "#ff5252":"#b7b7b7"};
  min-width: 160px;
  font-size: 1rem;
  &:after {
    content: " *";
    color: #f44336;
  }
`

export const Submit = styled.input`
  background-color: #ff9800;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
  padding: 1rem;
  border: none;
  color: white;
`

const Input = styled.input`
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

const WrapperLegend = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 20px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  flex: 1;
  > span {
    display: block;
    margin-left: 20px;
    font-size: .7rem;
    color: #b5b5b5;
  }
`

export const WithLegend = (props) => {
  return (
    <WrapperLegend>
      {props.children}
      <span>{props.legend}</span>
    </WrapperLegend>
  )
}

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

export default Input