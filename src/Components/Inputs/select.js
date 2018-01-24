import React from 'react'
import styled from 'styled-components'

import arrow from './arrow.png'

const Wrapper = styled.div`
  min-width: 180px;
`

const Container = styled.select`
  appearance: none;
  outline: none;
  background: #fafafa url(${arrow}) no-repeat 90% 50%;
  padding: .6rem .5rem;
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  font-size: .9rem;
  font-weight: lighter;
  min-width: 140px;
`

const Select = ({
  id,
  value,
  onChange,
  onBlur,
  ...props
}) => {
  return (
    <Wrapper>
      <Container id={id} value={value} onChange={onChange} onBlur={onBlur} {...props}>
        <option>Unica</option>
        <option>Mensal</option>
        <option>Semestral</option>
        <option>Anual</option>
      </Container>
    </Wrapper>
  )
}

export default Select