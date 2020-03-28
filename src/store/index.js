import createSagaMiddleware from 'redux-saga'
import createStore from './createStore'

import rootReduces from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const middlewares = [sagaMiddleware]

const store = createStore(rootReduces, middlewares)

sagaMiddleware.run(rootSaga)

export default store
