import React from "react"
import styled from "styled-components"

export const Label = styled.label`
  color: ${props => (props.error ? "#ff5252" : "#b7b7b7")};
  min-width: 165px;
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

const WrapperLegend = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  > input {
    margin: 0;
  }
  > span {
    display: block;
    font-size: 0.7rem;
    color: #b5b5b5;
  }
`

export const WithLegend = props => {
  return (
    <WrapperLegend>
      {props.children}
      <span>{props.legend}</span>
    </WrapperLegend>
  )
}
