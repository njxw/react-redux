import {createStore} from 'redux'
import {counter} from './reducers'


// 在这里生成store对象
const store = createStore(counter)

console.log('store', store.getState())

export default store
