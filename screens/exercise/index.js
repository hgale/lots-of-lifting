/**
 * Display an exercise and its associated UI.
 */

import React, {PropTypes} from 'react'
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'

import style from './style'
import CloseImage from '../../assets/x.png'

class Exercise extends React.Component {
  constructor() {
    super()
  }

  render () {
    const { title, type, saveWorkout, close } = this.props
    return (
      <Modal
         animationType={'none'}
         transparent={false}
         visible={true}
         onRequestClose={close}
         >
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
        </View>
       </Modal>
    )
  }
}

Exercise.propTypes = {
  title: React.PropTypes.string.isRequired,
  // TODO: figure out how to check for enum
  type: React.PropTypes.string.isRequired,
  saveWorkout: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
}

export default Exercise
