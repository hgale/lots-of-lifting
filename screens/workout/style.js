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
    color: '#929292',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  list: {
    borderWidth: 4,
    borderColor: '#E4E4E4',
    backgroundColor: 'white',
  },
  listItemContainer: {
    backgroundColor: 'white'
  },
  listItem: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    color: 'black',
    backgroundColor: 'white',
    fontSize: 14
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: 10,    
  },
  modalBackgroundStyle: {
    backgroundColor: '#f5fcff'
  }
})
