
import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
import { Provider, connect } from 'react-redux'
import { persistStore } from 'redux-persist'
import HistoryScreen from './screens/history'
import WorkoutScreen from './screens/workout'

import Spinner from './components/spinner'

import ReduxPersist from './config/ReduxPersist'
import configureStore from './store/store'

const store = configureStore()

export const Tabs = TabNavigator({
  workout: {
    screen: WorkoutScreen
  },
  history: {
    screen: HistoryScreen
  },
})

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isRehydrated: false
    }
  }

  componentWillMount () {
    persistStore(store, ReduxPersist.storeConfig, () => {
      this.setState({isRehydrated: true})
    })
  }

  render() {
    if (!this.state.isRehydrated) {
      return <Spinner />
    } else {
      return (
        <Provider store={store}>
          <Tabs />
        </Provider>
      )
    }
  }
}

export default App
