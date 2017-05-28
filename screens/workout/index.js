/**
 * Workout tracker component
 */

import React from 'react'

import { View, Text } from 'react-native'

import style from './style'

class WorkoutScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Workout'
  }

  render () {

    return (
      <View style={style.container}>
        <Text>Workout tab is awesome!</Text>
      </View>
    )
  }
}

export default WorkoutScreen
