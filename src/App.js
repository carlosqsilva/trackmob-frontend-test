import React, { Component } from 'react';
import Header from './Components/Header/header'
import Hero from './Components/Hero/hero'
import Form from './Components/Form/form'
import Footer from './Components/Footer/footer'

const Fragment = React.Fragment

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <Form />
        <Footer />
      </Fragment>
    )
  }
}

export default App;
