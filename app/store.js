import { fromJS }                                from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware }                      from 'react-router-redux'

import createReducer from './reducers'


// if available, use 'redux-devtools'
const devtools = window.devToolsExtension || (() => null)

/**
 * Create the redux store with given configuration.
 *
 * @param   {Object} initialState - Initial state for the store.
 * @param   {Object} history      - History to sync with the store.
 * @returns {Object}              - The redux store.
 */
export default function configureStore(initialState = {}, history) {
  const enhancers = [
    applyMiddleware(...[
      routerMiddleware(history),
    ]),
    devtools(),
  ]
  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers))

  if (module.hot) {
    System.import('./reducers')
      .then(reducer => store.replaceReducer(reducer.default()))
      .catch(err => console.error('Failed to replace reducers:', err))
  }
  return store
}

