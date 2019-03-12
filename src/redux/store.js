import {createStore,applyMiddleware} from 'redux'
import {counter} from './reducers'
import thunk from 'redux-thunk'

// 在这里生成store对象
// const store = createStore(
//   counter,
//   applyMiddleware(thunk) // 第二个参数指定应用那些中间件
// )
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(
  counter, // reducer
  composeWithDevTools(applyMiddleware(thunk))
)
console.log('store', store.getState())

export default store
