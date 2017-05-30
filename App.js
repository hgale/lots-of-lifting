
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation'

import HistoryScreen from './screens/history'
import WorkoutScreen from './screens/workout'

export const Tabs = TabNavigator({
  workout: {
    screen: WorkoutScreen
  },  
  history: {
    screen: HistoryScreen
  },
});

class App extends Component {
  render() {
    return <Tabs />
  }
}

export default App
