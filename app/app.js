/**
 * @file
 *
 * Application entrypoint.
 */

import 'sanitize.css/sanitize.css'

import 'babel-polyfill'

import React    from 'react'
import ReactDOM from 'react-dom'

import { Provider }                                      from 'react-redux'
import { applyRouterMiddleware, Router, browserHistory } from 'react-router'
import { syncHistoryWithStore }                          from 'react-router-redux'
import { useScroll }                                     from 'react-router-scroll'

import { install } from 'offline-plugin/runtime'

import configureStore  from 'store'
import configureRoutes from 'routes'

import App              from 'containers/App'
import LanguageProvider from 'containers/LanguageProvider'

import { translationMessages } from 'i18n'
import { selectLocationState } from 'containers/App/selectors'

/**
 * The redux store.
 *
 * @type {Object}
 */
const store = configureStore({ }, browserHistory)

/**
 * Browser history with hooks to sync into the redux store.
 *
 * @type {Object}
 */
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
})

/**
 * The 'root' route for 'react-router'.
 *
 * @type {Object}
 */
const rootRoute = {
  component:   App,
  childRoutes: configureRoutes(store),
}

/**
 * Render the application.
 *
 * @param   {Object} messages - Application translations.
 * @returns {JSX}             - Rendered application.
 */
const render = messages => {
  const application = (
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <Router
          history={history}
          routes={rootRoute}
          render={applyRouterMiddleware(useScroll())}
        />
      </LanguageProvider>
    </Provider>
  )
  ReactDOM.render(application, document.getElementById('app'))
}

// hot reloading translations
if (module.hot) {
  module.hot.accept('./i18n', () => render(translationMessages))
}

// make sure we have 'intl' capabilities before we render the application
if (!window.Intl) {
  new Promise(resolve => resolve(System.import('intl')))
    .then(() =>
      Promise.all([
        System.import('intl/locale-data/jsonp/en.js'),
      ]))
    .then(() =>
      render(translationMessages))
    .catch(err => {
      throw err
    })
} else {
  render(translationMessages)
}

// if everything went better than expected, enable offline capabilities
install()
