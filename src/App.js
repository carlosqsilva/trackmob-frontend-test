import React, { Component } from 'react';
import Hero from './Components/Hero/hero'
import Form from './Components/Form/form'
import Footer from './Components/Footer/footer'

const Fragment = React.Fragment

class App extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Form />
        <Footer />
      </Fragment>
    )
  }
}

export default App;
