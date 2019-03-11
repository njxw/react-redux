import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
// import App from './components/app' // 这里应该通过容器组件引入
import App from './container/app' // 这里应该通过容器组件引入


import store from './redux/store'


// 生成一个store对象,需要接受reducer
// const store = createStore(counter) // 创建store时就会调用一个reducer,因为store需要得到初始state,而得到reducer是通过调用reducer得到的
// console.log(store)
// store中有状态，因此将store传过去，
ReactDom.render(
  (
    <Provider store={store}> /**用react-redux ，store应该交给Provider来管理*/
      <App/>
    </Provider>
  ),
  document.getElementById('root'))
