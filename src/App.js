import React from "react"
import Hero from "./Components/Hero/hero"
import Form from "./Components/Form/form"
import Footer from "./Components/Footer/footer"

const Fragment = React.Fragment

const App = () => {
  return (
    <Fragment>
      <Hero />
      <Form />
      <Footer />
    </Fragment>
  )
}

export default App
