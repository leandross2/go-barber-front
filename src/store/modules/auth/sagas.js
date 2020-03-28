import { takeLatest, call, put, all } from 'redux-saga/effects'

import history from '~/services/history'
import api from '~/services/api'
import { signInSuccess } from './actions'

export function* signIn({ payload }) {
  const { email, password } = payload

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  })

  const { token, user } = response.data
  console.tron.warn(user)
  if (!user.provider) {
    console.tron.error('usuario nao é prestador')
    return
  }
  console.tron.warn('@@@@')
  yield put(signInSuccess(token, user))
  history.pushState('/dashboard')
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)])
