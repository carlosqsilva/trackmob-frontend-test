import React from 'react'
import styled from 'styled-components'

import brand from './brand.png'
import logo from './credit.png'

const Wrapper = styled.footer`
  width: 100%;
  min-height: 110px;
  background-color: #039be5;
  color: white;
  display: grid;
  grid-template-columns: 1fr minmax(300px, 1320px) 1fr;
`

const Container = styled.div`
  grid-column: 2;
  min-height: 110px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 550px){
    flex-direction: column;
  }
`

const Left = styled.div`
  align-self: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 550px){
    flex-direction: column;
    text-align: center;
  }
`

const Right = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: .9rem;

  @media screen and (max-width: 550px){
    align-items: center;
    margin-top: 20px;
  }
`

const Logo = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: rgba(2,136,202,255);
  border-radius: 3px;
  padding: .4rem .3rem;
  font-size: .7rem;
  color: white;
`

const Info = styled.span`
  font-size: .9rem;
  margin-left: 20px;
  display: block;
  &:not(:first-child) {
    color: rgba(255,255,255,.7);
  }
`

const Footer = (props) => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <img src={brand} alt="" />
          <div>
            <Info>Esta com dúvidas?</Info>
            <Info>Para capitais: 0800 00 00 000</Info>
            <Info>Para outras localidades: 11 1234 56789</Info>
            <Info>Por email: contato@ong.ong</Info>
          </div>
        </Left>
        <Right>
          Copyright @2017
          <Logo href="https://trackmob.com.br/" target="_blank">
            POWERED by <img src={logo} alt="" />
          </Logo>
        </Right>
      </Container>
    </Wrapper>
  )
}

export default Footer