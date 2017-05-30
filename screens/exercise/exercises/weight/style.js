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
    fontWeight: 'bold',
    textAlign: 'center'
  },
  repsRow: {
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 4,
    borderColor: '#E4E4E4',
    backgroundColor: 'white'
  },
  weightPrompt: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  repsPrompt: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  inputReps: {
    marginRight : 10,
    fontSize: 20,
    width: 100
  },
  inputWeight: {
    marginRight : 10,
    fontSize: 20,
    width: 100
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
  doneButton: {
    height: 46,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
    backgroundColor: 'grey',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  doneButtonTextLight: {
    color: 'black',
    fontSize: 14,
  }
})
