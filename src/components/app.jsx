import React ,{Component} from 'react'

import {INCREAMENT, DCREAMENT} from '../redux/action-types'
export default class App extends Component{

  /***
    这里使用redux来管理状态，因此这里不需要有state(不需要由redux来管理的state),也不能更新state

  ****/
  // 初始化数据
  state = {
    count: 0
  }

  increament = () => {
    // 1.得到新的值
    const num = this.select.value*1
    // 2. 需要调用store的方法来更新状态，因为状态在store中
    this.props.store.dispatch({type:INCREAMENT, data: num})
  }
  descreament = () => {
    // 1.得到新的值
    const num = this.select.value*1
    this.props.store.dispatch({type:DCREAMENT, data: num})

  }
  inscreamentIfOdd = () => {
    // 1.得到新的值
    const num = this.select.value*1
    // 2. 得到原本的状态
    const count = this.props.store.getState()
    // 3. 判断，满足条件才更新
    if (count % 2 === 1) {
      this.props.store.dispatch({type:INCREAMENT, data: num})
    }
  }

  dscreamentAsync = () => {
    // 1.得到新的值
    const num = this.select.value*1

    setTimeout (() => {
      this.props.store.dispatch({type:INCREAMENT, data: num})
    }, 300)
  }
  render () {
    const count =this.props.store.getState() // 会得到所有的state
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref={select => this.select = select}>/***非受控组件**/
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increament}>+</button>&nbsp;
          <button onClick={this.descreament}>-</button>&nbsp;
          <button onClick={this.inscreamentIfOdd}>increament if odd</button>&nbsp;
          <button onClick={this.dscreamentAsync}>increament async</button>
        </div>
      </div>
    )
  }
}
