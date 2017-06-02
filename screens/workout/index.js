/**
 * Workout tracker component
 */

import React, { Component }  from 'react'
import {
  View,
  Text,
  TextInput,
  ListView,
  TouchableHighlight,
} from 'react-native'
import { connect } from 'react-redux'

import Fuse from 'fuse.js'

import {setDate, appendExercise} from '../../actions/currentWorkout/'
import Exercises from './exercises'
import Exercise from '../exercise/'

import style from './style'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

class WorkoutScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Workout'
  }

  constructor(props) {
    super(props)
    this.state = {
      query: '',
      dataSource: ds.cloneWithRows(Exercises),
      selectedExercise: null
    }
    this.handleSearchExercises = this.handleSearchExercises.bind(this)
    this.handleSaveExercise = this.handleSaveExercise.bind(this)
  }

  handleSaveExercise (exercise) {
    // TODO: Wire up to redux
    console.log('handleSaveExercise hit with, ', exercise);
    this.setState({selectedExercise: null})
    let {setDate, workoutDate, appendExercise } = this.props
    if (!workoutDate) {
      console.log('workout date not set');
      setDate(new Date())
    }
    appendExercise(exercise)
  }

  handleSearchExercises (event) {
    let searchText = event.nativeEvent.text
    this.setState({query: searchText})
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

  onPressRow(rowData) {
    this.setState({selectedExercise: rowData})
  }

  renderRow(rowData, sectionID, rowID) {
     return (
       <TouchableHighlight onPress={this.onPressRow.bind(this, rowData)}>
         <View style={style.listItemContainer}>
          <Text style={style.listItem}>{rowData.title}</Text>
         </View>
      </TouchableHighlight>
     )
   }

  render () {
    return (
        <View style={style.container}>
          { this.state.selectedExercise ?
            <Exercise
              type={this.state.selectedExercise.type}
              title={this.state.selectedExercise.title}
              saveWorkout={this.handleSaveExercise}
              close={() => {this.setState({selectedExercise: null})}}/>
              : null
          }
          <Text style={style.title}>Create a Workout</Text>
          <TextInput
            style={style.input}
            placeholder='Search Exercises'
            value={this.state.query}
            onChange={this.handleSearchExercises}
            returnKeyType='search'
          />
          <ListView
            style={style.list}
            initialListSize={1}
            removeClippedSubviews={false}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
          />
        </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  let currentWorkout = state.currentWorkout
  return {
    displayCurrentWorkout: (currentWorkout.date !== null && currentWorkout.exercises.length >= 0),
    workoutDate: currentWorkout.date
  }
}

const mapDispatchToProps = (dispatch, props) => {
  //{setDate, appendExercise
  return {
    setDate: (date) => dispatch(setDate(date)),
    appendExercise: (exercise) => dispatch(appendExercise(exercise))
  }
}

const reduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutScreen)

export default reduxContainer
