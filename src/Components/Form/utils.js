import React from 'react'
import styled from 'styled-components'

export const Segment = styled.div`
  padding: 30px 40px 20px 40px;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  &:not(:last-child) {
    border-bottom: 1px solid #f5f5f5;
  }
  &:last-child {
    background-color: #f5f5f5;
    padding: 10px 40px 20px 40px;
  }

  @media screen and (max-width: 550px){
    padding: 20px 30px 10px 30px;
  }
`

export const Row = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Column = styled.div`
  ${props => props.fluid && "flex: 1"};
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 185px;
`

export const Title = styled.h1`
  font-size: 22px;
  font-weight: medium;
  color: #424242;
`

const Badge = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-size: .65rem;
  font-weight: normal;
  margin-left: 5px;
  padding: 6px;
  vertical-align: middle;
  background-color: #f5f5f5;
  > img {
    margin-right: 4px;
  }
`

export const Tag = (props) => {
  return (
    <Badge>
      <img src={props.src}  width={14} height={14} alt="" />
      <span>{props.children}</span>
    </Badge>
  )
}

export const Result = (props) => {
  const { value, frequency, ...other } = props
  const period = ["unico", "mensais", "semestrais","anuais"]
  const index = ["Unica", "Mensal", "Semestral", "Anual"].indexOf(frequency)
  if (value) {
    return <h2
      style={{fontSize: 16, marginTop: 5, color: "#424242"}}
    >{`R$ ${props.value} ${period[index]}`}</h2>
  }
  return null 
}