/**
 * UI for inputting/editing an exercise of type count
 */

import React, {PropTypes} from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'

import style from './style'
import CloseImage from '../../../../assets/x.png'


class Time extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data
    }
    this.handleInputTime = this.handleInputTime.bind(this)
  }

  handleInputTime (event) {
    let time = event.nativeEvent.text
    this.setState({data: { 'time' : time }})
    console.log('new state ', this.state.data);
  }

  render () {
    const { title, saveWorkout, close } = this.props
    const { data } = this.state
    let time = data ? data.time : ''
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
            <Text style={style.repsPrompt}>Duration: </Text>
            <TextInput
              style={style.input}
              placeholder='Enter time'
              value={time}
              keyboardType='numbers-and-punctuation'
              onChange={this.handleInputTime}
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

Time.propTypes = {
  title: React.PropTypes.string.isRequired,
  data: React.PropTypes.object,
  saveWorkout: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
}

export default Time
