import React from "react"
import styled from "styled-components"
import Header from "../Header/header"
import banner from "./banner.png"

const Wrapper = styled.section`
  width: 100%;
  height: 840px;
  background: url(${banner});
  background-size: cover;
  background-position: center;
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr minmax(300px, 880px) 1fr;
  position: relative;
`

const Container = styled.div`
  grid-column: 2;
  padding: 0px 10px;
  margin-top: 260px;
  margin-right: 20%;
  font-size: 16px;

  @media screen and (max-width: 550px) {
    margin-top: 220px;
    font-size: 12px;
    margin-right: 0px;
  }
`

const Title = styled.h1`
  font-size: 2.5em;
  color: #2196f3;
  margin-bottom: 40px;
`

const Text = styled.p`
  font-size: 1.2em;
  color: #868686;
`

const Hero = props => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Title>Thanks for Your Support!</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          tellus viverra, mattis turpis eget, vehicula dui. Nulla accumsan nulla
          et mi semper, in ornare dolor faucibus. Praesent lobortis magna sed
          massa pretium lacinia.
        </Text>
      </Container>
    </Wrapper>
  )
}

export default Hero
