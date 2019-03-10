import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import App from './components/app'

import {counter} from './redux/reducers'
// 生成一个store对象,需要接受reducer
const store = createStore(counter) // 创建store时就会调用一个reducer,因为store需要得到初始state,而得到reducer是通过调用reducer得到的
console.log(store)
// store中有状态，因此将store传过去，
ReactDom.render(<App store={store}/>, document.getElementById('root'))

// 重绘
store.subscribe(function () {
  ReactDom.render(<App store={store}/>, document.getElementById('root'))
})

/**********
  ReactDom.render(<App store={store}/>, document.getElementById('root')) 重复，应该定义为函数
  function render () {
      ReactDom.render(<App store={store}/>, document.getElementById('root'))
  }
  // 初始渲染
  render()

  store.subscribe(function () {
    render()
  })
***************/
