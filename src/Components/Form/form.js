import React from 'react'
import styled from 'styled-components'
import { withFormik } from 'formik'
import Yup from 'yup'

import Select from '../Inputs/select'
import { Label, Submit, CheckBox, TextInput, DateInput, WithLegend } from '../Inputs'
import { Tag, Title, Row, Segment } from './utils'
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
              error={errors.value && touched.value}
              onChange={handleChange}
              onBlur={handleBlur} />
          </WithLegend>
        </Row>
      </Segment>

      <Segment>
        <Title>Dados pessoais</Title>
        <Row>
          <Label
            error={
              (errors.first_name && touched.first_name) ||
              (errors.last_name && touched.last_name)
            }>Nome Completo</Label>

          <TextInput
            id="first_name"
            type="text"
            placeholder="Primeiro nome"
            error={errors.first_name && touched.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextInput
            id="last_name"
            type="text"
            placeholder="Sobrenome"
            error={errors.last_name && touched.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Row>
        <Row>
          <Label error={errors.email && touched.email}>Email</Label>
          <TextInput
            id="email"
            type="email"
            placeholder="email@email.com"
            error={errors.email && touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Row>
      </Segment>

      <Segment>
        <Title>Dados de pagamento<Tag src={lock}>DADOS SEGUROS</Tag></Title>
        <Row>
          <Label error={errors.document && touched.document}>CPF</Label>
          <TextInput
            id="document"
            type="text"
            placeholder="000.000.000-00"
            maxLength="11"
            error={errors.document && touched.document}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Row>
        <Row>
          <Label
            error={
              (errors.card_number && touched.card_number) ||
              (errors.cvv && touched.cvv)
            }>Numero do cartão</Label>

          <TextInput
            id="card_number"
            type="text"
            maxLength="16"
            placeholder="0000 0000 0000 0000"
            error={errors.card_number && touched.card_number}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextInput
            id="cvv"
            type="text"
            maxLength="3"
            placeholder="cvv"
            error={errors.cvv && touched.cvv}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Row>
        <Row>
          <Label error={errors.validity && touched.validity}>Validade do cartão</Label>
          <DateInput
            id="validity"
            text="text"
            placeholder="MM/AAAA"
            error={errors.validity && touched.validity}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Row>
      </Segment>

      <Segment>
        <Submit type="submit" value="Confirmar doação" />
        <CheckBox
          id="accept_contact"
          checked={values.accept_contact}
          onChange={handleChange}
        >Aceito ser contatado para receber informações sobre a ONG</CheckBox>
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
    document: ""
  }),
  validationSchema: Yup.object().shape({
    frequency: Yup.mixed().oneOf(["Unica", "Mensal", "Semestral", "Anual"]),
    value: Yup.number().positive().required(),
    first_name: Yup.string().min(2).required(),
    last_name: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    document: Yup.string().required().validarCPF("Required"),
    card_number: Yup.string().min(16).required(),
    cvv: Yup.string().min(3).required(),
    validity: Yup.date().min(new Date()).required(),
    accept_contact: Yup.boolean().required(),
  })
})(InnerForm)

const Form = () => (
  <Wrapper>
    <FinalForm />
  </Wrapper>
)

export default Form 