import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import logo from '~/assets/images/logo.svg'
// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('Campo E-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Campo Password deve ter no minimo 6 caractéres')
    .required('Campo Password é obrigatório'),
  name: Yup.string().required('Campo Nome é obrigatório'),
})
export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data)
  }
  return (
    <>
      <img src={logo} alt="Go Barber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/"> já tenho login</Link>
      </Form>
    </>
  )
}
