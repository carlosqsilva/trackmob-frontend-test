import React from 'react'
import styled from 'styled-components'
import brand from './brand.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.png'

const Wrapper = styled.header`
  width: 100%;
  min-height: 110px;
  max-height: 200px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr minmax(300px, 1320px) 1fr;
`

const Container = styled.div`
  grid-column: 2;
  min-height: 110px;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 550px){
    flex-direction: column;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #424242;
  img {
    margin-left: 15px;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0px 0px 0px;
    img {
      margin: 10px 5px 0px 5px;
    }
  }
`

const Header = (props) => {
  return (
    <Wrapper>
      <Container>
        <img src={brand} alt="brand" />
        <Right>
          <span>Compartilhe</span>
          <div>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </Right>
      </Container>
    </Wrapper>
  )
}

export default Header