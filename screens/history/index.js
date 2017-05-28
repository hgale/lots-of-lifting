/**
 * Workout tracker component
 */

import React from 'react'

import { View, Text } from 'react-native'

import style from './style'

class HistoryScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'History'
  }

  render () {

    return (
      <View style={style.container}>
        <Text>History tab!</Text>
      </View>
    )
  }
}

export default HistoryScreen
