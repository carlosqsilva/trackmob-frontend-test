import React from "react"
import styled from "styled-components"
import InputMask from "react-input-mask"
import date from "./date.png"
import arrow from "./arrow.png"
import "./style.css"

const Text = ({
  className,
  type,
  placeholder,
  maxLength,
  id,
  value,
  onChange,
  onBlur
}) => {
  return (
    <input
      className={`input ${className}`}
      type={type ? type : "text"}
      maxLength={maxLength ? maxLength : ""}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

const Mask = ({
  className,
  type,
  placeholder,
  mask,
  id,
  value,
  onChange,
  onBlur
}) => {
  return (
    <InputMask
      className={`input ${className}`}
      type={type ? type : "text"}
      placeholder={placeholder}
      id={id}
      mask={mask}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

export const Select = ({ id, value, onChange, onBlur, ...props }) => {
  return (
    <dic className="selectinput-container">
      <select
        className="selectinput"
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      >
        <option value="unico">Unica</option>
        <option value="mensais">Mensal</option>
        <option value="semestrais">Semestral</option>
        <option value="anuais">Anual</option>
      </select>
    </dic>
  )
}

export const CheckBox = ({ id, checked, onChange, children }) => {
  return (
    <label className="checkbox--label">
      <input
        className="checkbox"
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  )
}

export const TextInput = styled(Text)`
  ${props => props.fluid && "flex: 1"};
  ${props => props.large && "max-width: 310px"};
  ${props => props.normal && "max-width: 200px"};
  ${props => props.small && "max-width: 100px"};
  border: 1px solid ${props => (props.error ? "#ff5252" : "#d2d2d2")};
`

export const MaskInput = styled(Mask)`
  ${props => props.fluid && "flex: 1"};
  ${props => props.large && "max-width: 310px"};
  ${props => props.normal && "max-width: 200px"};
  ${props => props.small && "max-width: 100px"};
  border: 1px solid ${props => (props.error ? "#ff5252" : "#d2d2d2")};
`

export const DateInput = styled(Mask)`
  ${props => props.fluid && "flex: 1"};
  ${props => props.large && "max-width: 310px"};
  ${props => props.normal && "max-width: 200px"};
  ${props => props.small && "max-width: 100px"};
  border: 1px solid ${props => (props.error ? "#ff5252" : "#d2d2d2")};
  background: #fafafa url(${date}) no-repeat 95% 50%;
  padding-right: 2rem;
`
