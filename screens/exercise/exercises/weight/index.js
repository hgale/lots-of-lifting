/**
 * UI for inputting/editing an exercise of type count
 */

import React, {PropTypes} from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'

import style from './style'
import CloseImage from '../../../../assets/x.png'


class Weight extends React.Component {
  constructor(props) {
    super(props)
    let data = this.props.data ? this.props.data : {}
    console.log('Constructor data ', data);
    this.state = {
      data: data
    }
    this.handleInputReps = this.handleInputReps.bind(this)
    this.handleInputWeight = this.handleInputWeight.bind(this)
  }

  handleInputReps (event) {
    let reps = event.nativeEvent.text
    let data = this.state.data
    data['reps'] = reps
    this.setState({data: data})
    console.log('new state ', this.state.data)
  }

  // TODO: make this lbs for now but later might want
  // to make it so we can use metric
  handleInputWeight (event) {
    let weight = event.nativeEvent.text
    let data = this.state.data
    data['weight'] = weight
    this.setState({data: data})
    console.log('new state ', this.state.data);
  }

  render () {
    const { title, saveWorkout, close } = this.props
    const { data } = this.state
    let numberOfReps = data ? data.reps : ''
    // TODO: move done button into its own reusable component
    // TODO: revisit this, as keyboardType='numbers-and-punctuation' is not cross platform
    return (
      <View style={style.container}>
          <View style={style.closeButton}>
             <TouchableOpacity
               onPress={close}>
               <View style={style.closeImageContainer}>
                 <Image style={style.closeImage} source={CloseImage} />
               </View>
             </TouchableOpacity>
           </View>
          <Text style={style.title}>{title}</Text>
          <View style={style.repsRow}>
            <Text style={style.weightPrompt}>lbs: </Text>
            <TextInput
              style={style.inputWeight}
              placeholder='input lbs'
              value={numberOfReps}
              keyboardType='numbers-and-punctuation'
              onChange={this.handleInputWeight}
              returnKeyType='done'
            />
            <Text style={style.repsPrompt}>Reps: </Text>
            <TextInput
              style={style.inputReps}
              placeholder='input reps'
              value={numberOfReps}
              keyboardType='numbers-and-punctuation'
              onChange={this.handleInputReps}
              returnKeyType='done'
            />
          </View>
          <TouchableOpacity
            style={style.doneButton}
            onPress={ () => {this.props.saveWorkout(this.state.data) }}>
            <Text style={style.doneButtonTextLight}>Save</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

Weight.propTypes = {
  title: React.PropTypes.string.isRequired,
  data: React.PropTypes.object,
  saveWorkout: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
}

export default Weight
