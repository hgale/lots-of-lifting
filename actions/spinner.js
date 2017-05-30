import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator animating={true} color='white' size='large' />
    </View>
  )
}

export default Spinner
