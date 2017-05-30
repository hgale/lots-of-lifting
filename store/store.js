import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'

import currentWorkout from '../reducers/currentWorkout'

const appReducer = combineReducers({
  currentWorkout,
})

// TODO: consolidate this
let middleware = []
middleware.push(thunk)

// a function which can create our store and auto-persist the data
export default () => {
  let store = {}

  const enhancers = compose(
    applyMiddleware(...middleware),
    autoRehydrate()
  )

  store = createStore(
    appReducer,
    enhancers
  )

  return store
}
