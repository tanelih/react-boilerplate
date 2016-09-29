/**
 * Log errors related to dynamically loading the pages.
 *
 * @param {Object} err - The error to log.
 */
const errorLoading = err =>
  console.error('Dynamic page loading failed', err)

/**
 * Helper for loading modules.
 *
 * @param   {Function} cb - Callback for signifying module loaded.
 * @returns {Function}    - Function to accept the module.
 */
const loadModule = cb => module => cb(null, module.default)

/**
 *
 * @param   {Object}        store - The redux store.
 * @returns {Array<Object>}       - Application routes.
 */
export default function createRoutes(store) {
  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        System.import('containers/HomePage')
          .then(loadModule(cb)).catch(errorLoading)
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb)).catch(errorLoading)
      },
    },
  ]
}

