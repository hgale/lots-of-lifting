import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'stretch',
    padding: 15,
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    marginTop: 25,
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold'
  },
  closeButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  closeImage: {
    height: 24,
    width: 24
  },
  closeImageContainer: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
