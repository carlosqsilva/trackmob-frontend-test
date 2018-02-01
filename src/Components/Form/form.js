import React from "react"
import styled from "styled-components"
import Yup from "yup"
import { withFormik } from "formik"
import { apiPOST } from "./apiCall"
import { validarCPF, validarData } from "./validation"
import InnerForm from "./innerFom"

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(300px, 880px) 1fr;
  grid-template-rows: minmax(100px, max-content);
  margin-top: -280px;
  padding-bottom: 60px;
`

Yup.addMethod(Yup.string, "validarCPF", function(message) {
  return this.test({
    name: "validarCPF",
    exclusive: true,
    message: message || "Required",
    test: (value = " ") => {
      return validarCPF(value)
    }
  })
})

Yup.addMethod(Yup.string, "validarData", function(message) {
  return this.test({
    name: "validarData",
    exclusive: true,
    message: message || "Required",
    test: (value = " ") => {
      return validarData(value)
    }
  })
})

const FinalForm = withFormik({
  mapPropsToValues: () => ({
    accept_contact: true,
    frequency: "semestrais",
    first_name: "",
    last_name: "",
    email: "",
    document: "",
    card_number: "",
    cvv: "",
    validity: ""
  }),
  validationSchema: Yup.object().shape({
    value: Yup.number()
      .positive()
      .min(15)
      .required(),
    first_name: Yup.string()
      .min(2)
      .required(),
    last_name: Yup.string()
      .min(2)
      .required(),
    email: Yup.string()
      .email()
      .required(),
    document: Yup.string()
      .validarCPF("Required")
      .required(),
    card_number: Yup.string()
      .min(16)
      .required(),
    cvv: Yup.string()
      .min(3)
      .required(),
    validity: Yup.string()
      .validarData("Required")
      .required()
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    const complete_name = `${values.first_name} ${values.last_name}`
    apiPOST({ ...values, complete_name }).then(resp => {
      if (resp) {
        setStatus(true)
      }
    })
  }
})(InnerForm)

const Form = () => (
  <Wrapper>
    <FinalForm />
  </Wrapper>
)

export default Form
