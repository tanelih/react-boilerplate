import { fromJS }          from 'immutable'
import { combineReducers } from 'redux-immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

import languageProviderReducer from 'containers/LanguageProvider/reducer'


/**
 * Initial state for the ruter.
 *
 * @type {Object}
 */
const routeInitialState = fromJS({ locationBeforeTransitions: null })

/**
 * Reducer function for routes.
 *
 * @param   {Object} state  - Previous state.
 * @param   {Object} action - Flux standard action.
 * @returns {Object}        - The next state.
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({ locationBeforeTransitions: action.payload })
    default:
      return state
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 *
 * @param   {Object}   reducers - Additional reducers.
 * @returns {Function}          - The combined reducer function.
 */
export default function createReducer(reducers) {
  return combineReducers({
    ...reducers,
    route:    routeReducer,
    language: languageProviderReducer,
  })
}

