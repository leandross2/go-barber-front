import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { signInRequest } from '~/store/modules/auth/actions'

import logo from '~/assets/images/logo.svg'
// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('Campo E-mail é obrigatório'),
  password: Yup.string().required('Campo Password é obrigatório'),
})
export default function SignIn() {
  const dispatch = useDispatch()
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password))
  }
  return (
    <>
      <img src={logo} alt="Go Barber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register"> Criar conta gratuita</Link>
      </Form>
    </>
  )
}
