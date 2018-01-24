import React from 'react'
import styled from 'styled-components'
import logo from './logo.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.png'

const Wrapper = styled.header`
  width: 100%;
  height: 110px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr minmax(300px, 1320px) 1fr;
`

const Container = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > img {
    margin-left: 15px;
  }
`

const Header = (props) => {
  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="brand" />
        <Right>
          <span>Compartilhe</span>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </Right>
      </Container>
    </Wrapper>
  )
}

export default Header