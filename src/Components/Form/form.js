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
    <Container onSubmit={handleSubmit} >

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
            error={alert.first_name}
            onChange={handleChange}
            onBlur={handleBlur} fluid
          />
          <TextInput
            id="last_name"
            type="text"
            placeholder="Sobrenome"
            error={alert.last_name}
            onChange={handleChange}
            onBlur={handleBlur} fluid
          />
        </Row>
        <Row>
          <Label error={alert.email}>Email</Label>
          <TextInput
            id="email"
            type="email"
            placeholder="email@email.com"
            error={alert.email}
            onChange={handleChange}
            onBlur={handleBlur} fluid
          />
        </Row>
      </Segment>

      <Segment>
        <Alert error={ alert.document || alert.card_number || alert.cvv } />
        <Title>Dados de pagamento<Tag src={lock}>DADOS SEGUROS</Tag></Title>
        <Row>
          <Label error={alert.document}>CPF</Label>
          <TextInput
            id="document"
            type="text"
            placeholder="000.000.000-00"
            maxLength="11"
            error={alert.document}
            onChange={handleChange}
            onBlur={handleBlur} normal
          />
        </Row>
        <Row>
          <Label error={ alert.card_number || alert.cvv }>Numero do cartão</Label>
          <TextInput
            id="card_number"
            type="text"
            maxLength="16"
            placeholder="0000 0000 0000 0000"
            error={alert.card_number}
            onChange={handleChange}
            onBlur={handleBlur} large
          />
          <TextInput
            id="cvv"
            type="text"
            maxLength="3"
            placeholder="cvv"
            error={alert.cvv}
            onChange={handleChange}
            onBlur={handleBlur} small
          />
        </Row>
        <Row>
          <Label error={alert.date}>Validade do cartão</Label>
          <DateInput
            id="date"
            text="text"
            placeholder="dd/mm/aaaa"
            error={alert.date}
            onChange={handleChange}
            onBlur={handleBlur} normal
          />
        </Row>
      </Segment>

      <Segment>
        <Row>
          <Column>
            <Result frequency={values.frequency} value={values.value}/>
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
    frequency: "Semestral",
  }),
  validationSchema: Yup.object().shape({
    frequency: Yup.mixed().oneOf(["Unica", "Mensal", "Semestral", "Anual"]),
    value: Yup.number().positive().min(15).required(),
    first_name: Yup.string().min(2).required(),
    last_name: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    document: Yup.string().required().validarCPF("Required"),
    card_number: Yup.string().min(16).required(),
    cvv: Yup.string().min(3).required(),
    date: Yup.date().min(new Date()).required(),
    accept_contact: Yup.boolean().required(),
  }),
  handleSubmit: (values) => {
    const { date, ...others } = values
    const validity = date.split("/").slice(1).join("/")
    const complete_name = `${values.first_name} ${values.last_name}` 
    apiPOST({...others, complete_name, validity}).then( resp => {
      if (resp) {
        console.log("OK")
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