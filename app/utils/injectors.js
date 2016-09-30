import createReducer from 'reducers'

/**
 * Create a function to inject reducers.
 *
 * @param   {Object}   store - The redux store.
 * @returns {Function}       - Function to inject a reducer into the store.
 */
function injectAsyncReducer(store) {
  return function injectReducer(name, asyncReducer) {
    if (Reflect.has(store.asyncReducers, name)) return

    store.replaceReducer(createReducer({
      ...store.asyncReducers, [name]: asyncReducer }))
  }
}

/**
 * Get the injector functions for the given store.
 *
 * @param   {Object} store - The redux store.
 * @returns {Object}       - Map of injector functions.
 *
 */
export function getInjectors(store) {
  return {
    injectReducer: injectAsyncReducer(store)
  }
}

