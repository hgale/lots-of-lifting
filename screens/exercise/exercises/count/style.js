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
  repsPrompt: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  input: {
    marginRight : 10,
    fontSize: 20,
    width: 200
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
