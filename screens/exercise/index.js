/**
 * Display an exercise and its associated UI inside of a modal.
 */

import React, {PropTypes} from 'react'
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'

import CloseImage from '../../assets/x.png'
import ExerciseTypes from './types'

import Count from './exercises/count'
import Weight from './exercises/weight'
import Time from './exercises/time'

class Exercise extends React.Component {
  constructor(props) {
    super(props)
    this.getWorkout = this.getWorkout.bind(this)
  }

  getWorkout () {
    // TODO: wire up the other workout types
    switch (this.props.type) {
      case ExerciseTypes.weight:
        return <Weight {...this.props} />
      case ExerciseTypes.time:
        return <Time {...this.props} />
      case ExerciseTypes.count:
      default:
        return <Count {...this.props} />
    }
  }

  render () {
    const { close } = this.props
    let currentWorkout = this.getWorkout()
    return (
      <GestureRecognizer
        onSwipeDown={close}
        config={{velocityThreshold: 0.3, directionalOffsetThreshold: 80}}>
        <Modal
           animationType={'none'}
           transparent={false}
           visible={true}
           onRequestClose={close}
           >
           {currentWorkout}
         </Modal>
      </GestureRecognizer>
    )
  }
}

Exercise.propTypes = {
  title: React.PropTypes.string.isRequired,
  type: PropTypes.oneOf([ExerciseTypes.count, ExerciseTypes.weight, ExerciseTypes.time]).isRequired,
  data: React.PropTypes.object,
  saveWorkout: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
}

export default Exercise
