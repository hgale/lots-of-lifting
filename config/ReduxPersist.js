// import immutableTransform from 'redux-persist-transform-immutable'
import { AsyncStorage } from 'react-native'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: [],
// transforms: [immutableTransform()]
  }
}

export default REDUX_PERSIST
