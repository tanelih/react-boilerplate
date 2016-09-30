import expect             from 'expect'
import { browserHistory } from 'react-router'

import configureStore from '../store'


describe('configureStore', () => {
  let store = null

  before(() => {
    store = configureStore({}, browserHistory)
  })

  describe('asyncReducers', () => {
    it('should contain an object for async reducers', () => {
      expect(typeof store.asyncReducers).toEqual('object')
    })
  })
})

