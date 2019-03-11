import React ,{Component} from 'react'

// import {INCREAMENT, DCREAMENT} from '../redux/action-types' // 引入ations就不需要了

import * as actions from '../redux/actions.js' // 引入该模块下的所有子模块

export default class App extends Component{

  /***
    这里使用redux来管理状态，因此这里不需要有state(不需要由redux来管理的state),也不能更新state

    该组件有个缺陷就是redux和react组件耦合度太高，因为组件中到处可以看到store，其实可以通过react-redux这个react插件来降低他们之间的耦合度的
  ****/
  // 初始化数据


  increament = () => {
    // 1.得到新的值
    const num = this.select.value*1
    // 2. 需要调用store的方法来更新状态，因为状态在store中
    // this.props.store.dispatch({type:INCREAMENT, data: num}) // 应该通过action来管理
    this.props.store.dispatch(actions.increament(num)) // 其实这里的store不应该来自index创建，而是有一个专门的store来管理
  }
  descreament = () => {
    // 1.得到新的值
    const num = this.select.value*1
    // this.props.store.dispatch({type:DCREAMENT, data: num})// 不用手动创建action, 应该通过actions来管理
    this.props.store.dispatch(actions.decreament(num))
  }
  inscreamentIfOdd = () => {
    // 1.得到新的值
    const num = this.select.value*1
    // 2. 得到原本的状态
    const count = this.props.store.getState()
    // 3. 判断，满足条件才更新
    if (count % 2 === 1) {
      // this.props.store.dispatch({type:INCREAMENT, data: num}) // 这里的dispatch都是我们自己手动创建的，这并不是redux的想法，应该由工厂函数来创建，因此在redux中应该有一个专门的模块,命名为actions.js
      this.props.store.dispatch(actions.increament(num))
    }
  }

  dscreamentAsync = () => {
    // 1.得到新的值
    const num = this.select.value*1

    setTimeout (() => {
      // this.props.store.dispatch({type:INCREAMENT, data: num})
      this.props.store.dispatch(actions.increament(num))
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
