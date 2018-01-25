import React from 'react'
import styled from 'styled-components'
import { withFormik } from 'formik'
import Yup from 'yup'

import Select from '../Inputs/select'
import { Label, Submit, CheckBox, TextInput, DateInput, WithLegend } from '../Inputs'
import { Tag, Title, Row, Segment, Column, Result, Alert } from './utils'
import { apiPOST } from './apiCall'
import { validarCPF } from './cpf'
import lock from './lock.png'

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(300px, 880px) 1fr;
  grid-template-rows: minmax(100px, max-content);
  margin-top: -280px;
  padding-bottom: 60px;
`

const Container = styled.form`
  grid-column: 2;
  background-color: white;
  border-radius: 4px;
  margin: 0px 10px;
  overflow: hidden;
  z-index: 999;
`

const InnerForm = (props) => {

  const {
    values,
    touched,
    status,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = props

  const alert = {
    value: errors.value && touched.value,
    first_name: errors.first_name && touched.first_name,
    last_name: errors.last_name && touched.last_name,
    email: errors.email && touched.email,
    document: errors.document && touched.document,
    cvv: errors.cvv && touched.cvv,
    card_number: errors.card_number && touched.card_number,
    date: errors.date && touched.date
  }

  return (
    <Container onSubmit={handleSubmit} autoComplete="on" >

      <Segment>
        <Title>Selecione um valor</Title>
        <Row>
          <Select
            id="frequency"
            value={values.frequency}
            onChange={handleChange}
            onBlur={handleBlur} />
          <WithLegend legend="Valor mínimo de R$ 15,00">
            <TextInput
              id="value"
              type="text"
              placeholder="R$ 30,00"
              error={alert.value}
              onChange={handleChange}
              onBlur={handleBlur} fluid />
          </WithLegend>
        </Row>
      </Segment>

      <Segment>
        <Alert error={ alert.first_name || alert.last_name || alert.email }/>
        <Title>Dados pessoais</Title>
        <Row>
          <Label error={(alert.first_name || alert.last_name) }>Nome Completo</Label>
          <TextInput
            id="first_name"
            type="text"
            placeholder="Primeiro nome"
            value={values.first_name}
            error={alert.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="given-name" fluid
          />
          <TextInput
            id="last_name"
            type="text"
            placeholder="Sobrenome"
            value={values.last_name}
            error={alert.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="family-name" fluid
          />
        </Row>
        <Row>
          <Label error={alert.email}>Email</Label>
          <TextInput
            id="email"
            type="email"
            placeholder="email@email.com"
            value={values.email}
            error={alert.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="email" fluid
          />
        </Row>
      </Segment>

      <Segment>
        <Alert error={ alert.document || alert.card_number || alert.cvv || alert.date } />
        <Title>Dados de pagamento<Tag src={lock}>DADOS SEGUROS</Tag></Title>
        <Row>
          <Label error={alert.document}>CPF</Label>
          <TextInput
            id="document"
            type="text"
            placeholder="000.000.000-00"
            maxLength="11"
            value={values.document}
            error={alert.document}
            onChange={handleChange}
            onBlur={handleBlur} normal
          />
        </Row>
        <Row>
          <Label error={ alert.card_number || alert.cvv }>Número do cartão</Label>
          <TextInput
            id="card_number"
            type="text"
            maxLength="16"
            placeholder="0000 0000 0000 0000"
            value={values.card_number}
            error={alert.card_number}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off" large
          />
          <TextInput
            id="cvv"
            type="text"
            maxLength="3"
            placeholder="cvv"
            value={values.cvv}
            error={alert.cvv}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off" small
          />
        </Row>
        <Row>
          <Label error={alert.date}>Validade do cartão</Label>
          <DateInput
            id="date"
            text="text"
            placeholder="dd/mm/aaaa"
            value={values.date}
            error={alert.date}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off" normal
          />
        </Row>
      </Segment>

      <Segment>
        <Row>
          <Column>
            <Result frequency={values.frequency} value={values.value} status={status}/>
          </Column>
          <Column fluid>
            <Submit type="submit" value="Confirmar doação" />
            <CheckBox
              id="accept_contact"
              checked={values.accept_contact}
              onChange={handleChange}
            >Aceito ser contatado para receber informações sobre a ONG</CheckBox>
          </Column>
        </Row>
      </Segment>
    </Container>
  )
}

Yup.addMethod(Yup.string, 'validarCPF', function (message) {
  return this
    .test({
      name: "validarCPF",
      exclusive: true,
      message: message || "Required",
      test: (value = " ") => {
        return validarCPF(value)
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
    date: ""
  }),
  validationSchema: Yup.object().shape({
    value: Yup.number().positive().min(15).required(),
    first_name: Yup.string().min(2).required(),
    last_name: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    document: Yup.string().validarCPF("Required").required(),
    card_number: Yup.string().min(16).required(),
    cvv: Yup.string().min(3).required(),
    date: Yup.date().min(new Date()).required(),
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    const { date, ...others } = values
    const validity = date.split("/").slice(1).join("/")
    const complete_name = `${values.first_name} ${values.last_name}` 
    apiPOST({...others, complete_name, validity}).then( resp => {
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