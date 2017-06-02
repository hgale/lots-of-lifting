/**
 * UI for inputting/editing an exercise of type count
 */

import React, {PropTypes} from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'

import style from './style'
import CloseImage from '../../../../assets/x.png'
import Button from '../../../../components/button'


class Count extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data
    }
    this.handleInputReps = this.handleInputReps.bind(this)
  }

  handleInputReps (event) {
    let reps = event.nativeEvent.text
    this.setState({data: { 'reps' : reps }})
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
            <Text style={style.repsPrompt}>Reps: </Text>
            <TextInput
              style={style.input}
              placeholder='input number of reps'
              value={numberOfReps}
              keyboardType='numbers-and-punctuation'
              onChange={this.handleInputReps}
              returnKeyType='done'
            />
          </View>
          <Button text={'Save'} action={() => {this.props.saveWorkout(this.state.data) }} />
        </View>
    )
  }
}

Count.propTypes = {
  title: React.PropTypes.string.isRequired,
  data: React.PropTypes.object,
  saveWorkout: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
}

export default Count
