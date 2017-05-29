/**
 * Workout tracker component
 */

import React from 'react'

import { View, Text, TextInput, ListView } from 'react-native'

import Fuse from 'fuse.js'

import Exercises from './exercises'

import style from './style'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

class WorkoutScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Workout'
  }

  constructor() {
    super()
    this.state = {
      query: '',
      dataSource: ds.cloneWithRows(Exercises)
    }
    this.handleSearchExercises = this.handleSearchExercises.bind(this)
  }

  handleSearchExercises () {
    var options = {
      shouldSort: true,
      matchAllTokens: true,
      threshold: 0.2,
      keys: [
        "title"
      ]
    }
    let fuse = new Fuse(Exercises, options)
    var filteredExercises = fuse.search(this.state.query)
    this.setState({
      dataSource: ds.cloneWithRows(filteredExercises)
    })
  }

  renderRow(rowData) {
     return (
       <View style={style.listItemContainer}>
        <Text style={style.listItem}>{rowData.title}</Text>
       </View>
     )
   }

  render () {
    return (
      <View style={style.container}>
        <Text style={style.title}>Create a Workout</Text>
        <TextInput
          style={style.input}
          placeholder='Search Exercises'
          value={this.state.query}
          onChangeText={(text) => this.setState({ query: text })}
          onEndEditing={this.handleSearchExercises}
          onSubmitEditing={this.handleSearchExercises}
          returnKeyType='search'
        />
        <ListView
          style={style.list}
          initialListSize={1}
          removeClippedSubviews = {false}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
      </View>
    )
  }
}

export default WorkoutScreen