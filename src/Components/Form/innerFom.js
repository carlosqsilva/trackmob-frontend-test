import React from "react"
import styled from "styled-components"
import {
  Label,
  Submit,
  Select,
  CheckBox,
  TextInput,
  DateInput,
  MaskInput,
  WithLegend
} from "../Inputs"
import { Tag, Title, Row, Segment, Column, Result, Alert } from "./utils"
import lock from "./lock.png"

const Container = styled.form`
  grid-column: 2;
  background-color: white;
  border-radius: 4px;
  margin: 0px 10px;
  overflow: hidden;
  z-index: 999;
`

const InnerForm = ({
  values,
  touched,
  status,
  errors,
  handleChange,
  handleBlur,
  handleSubmit
}) => {
  const alert = {
    value: errors.value && touched.value,
    first_name: errors.first_name && touched.first_name,
    last_name: errors.last_name && touched.last_name,
    email: errors.email && touched.email,
    document: errors.document && touched.document,
    cvv: errors.cvv && touched.cvv,
    card_number: errors.card_number && touched.card_number,
    validity: errors.validity && touched.validity
  }

  return (
    <Container onSubmit={handleSubmit} autoComplete="on">
      <Segment>
        <Title>Selecione um valor</Title>
        <Row>
          <Select
            id="frequency"
            value={values.frequency}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <WithLegend legend="Valor mínimo de R$ 15,00">
            <TextInput
              id="value"
              placeholder="R$ 30,00"
              error={alert.value}
              onChange={handleChange}
              onBlur={handleBlur}
              fluid
            />
          </WithLegend>
        </Row>
      </Segment>

      <Segment>
        <Alert error={alert.first_name || alert.last_name || alert.email} />
        <Title>Dados pessoais</Title>
        <Row>
          <Label error={alert.first_name || alert.last_name}>
            Nome Completo
          </Label>
          <TextInput
            id="first_name"
            placeholder="Primeiro nome"
            value={values.first_name}
            error={alert.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="given-name"
            fluid
          />
          <TextInput
            id="last_name"
            placeholder="Sobrenome"
            value={values.last_name}
            error={alert.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="family-name"
            fluid
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
            autoComplete="email"
            fluid
          />
        </Row>
      </Segment>

      <Segment>
        <Alert
          error={alert.document || alert.card_number || alert.cvv || alert.date}
        />
        <Title>
          Dados de pagamento<Tag src={lock}>DADOS SEGUROS</Tag>
        </Title>
        <Row>
          <Label error={alert.document}>CPF</Label>
          <MaskInput
            id="document"
            mask="999\.999\.999\-99"
            placeholder="000.000.000-00"
            value={values.document}
            error={alert.document}
            onChange={handleChange}
            onBlur={handleBlur}
            normal
          />
        </Row>
        <Row>
          <Label error={alert.card_number || alert.cvv}>Número do cartão</Label>
          <MaskInput
            id="card_number"
            mask="9999 9999 9999 9999"
            placeholder="0000 0000 0000 0000"
            value={values.card_number}
            error={alert.card_number}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            large
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
            autoComplete="off"
            small
          />
        </Row>
        <Row>
          <Label error={alert.validity}>Validade do cartão</Label>
          <DateInput
            id="validity"
            mask="99\/9999"
            placeholder="mm/aaaa"
            value={values.validity}
            error={alert.validity}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            normal
          />
        </Row>
      </Segment>

      <Segment>
        <Row>
          <Column>
            <Result
              frequency={values.frequency}
              value={values.value}
              status={status}
            />
          </Column>
          <Column fluid>
            <Submit type="submit" value="Confirmar doação" />
            <CheckBox
              id="accept_contact"
              checked={values.accept_contact}
              onChange={handleChange}
            >
              Aceito ser contatado para receber informações sobre a ONG
            </CheckBox>
          </Column>
        </Row>
      </Segment>
    </Container>
  )
}

export default InnerForm
