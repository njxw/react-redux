import React ,{Component} from 'react'
import PropTypes from 'prop-types'
// import {INCREAMENT, DCREAMENT} from '../redux/action-types' // 引入ations就不需要了
// import {connect} from 'react-redux' // 连接的是redux和react // ui组件不需要有redux的代码,redux的代码应该放在容器组件
// import {increament, decreament}  from '../redux/actions.js'

// export default class App extends Component{ // 这里就不能直接暴露App了,暴露的是包装后的
 // class App extends Component{
 export default class Counter extends Component{
// 声明组件要接受的属性,该组件需要一个count数据和两个增减行为, 那么这些属性怎么传进来? 是<App count={count}, ...> 吗？ 显然不是的，react-redux提供了一个连接方法connect
// 该connect连接的是react和reduxb ,这三个属性来自redux
  static propTypes = {
    count: PropTypes.number.isRequired,
    increament: PropTypes.func.isRequired,
    decreament:  PropTypes.func.isRequired
  }

  increament = () => {
    // 1.得到新的值
    const num = this.select.value*1
    // 2. 需要调用store的方法来更新状态，因为状态在store中
    // this.props.store.dispatch({type:INCREAMENT, data: num}) // 应该通过action来管理
    // this.props.store.dispatch(actions.increament(num)) // 其实这里的store不应该来自index创建，而是有一个专门的store来管理
    this.props.increament(num)
  }
  descreament = () => {
    // 1.得到新的值
    const num = this.select.value*1
    // this.props.store.dispatch({type:DCREAMENT, data: num})// 不用手动创建action, 应该通过actions来管理
    // this.props.store.dispatch(actions.decreament(num))
    this.props.decreament(num)
  }
  inscreamentIfOdd = () => {
    // 1.得到新的值
    const num = this.select.value*1
    // 2. 得到原本的状态
    const count = this.props.count
    // 3. 判断，满足条件才更新
    if (count % 2 === 1) {
      // this.props.store.dispatch({type:INCREAMENT, data: num}) // 这里的dispatch都是我们自己手动创建的，这并不是redux的想法，应该由工厂函数来创建，因此在redux中应该有一个专门的模块,命名为actions.js
      // this.props.store.dispatch(actions.increament(num))
      this.props.increament(num)
    }
  }

  dscreamentAsync = () => {
    // 1.得到新的值
    const num = this.select.value*1

    setTimeout (() => {
      // this.props.store.dispatch({type:INCREAMENT, data: num})
      // this.props.store.dispatch(actions.increament(num))
      this.props.increament(num)
    }, 300)
  }
  render () {
    // const count =this.props.store.getState() // 会得到所有的state
    const {count} = this.props
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

// connect 是一个函数,执行后返回一个函数,返回的函数接受一个组件,返回一个新的组件
// 因此在外面使用的APP组件是包装后的组件, 通过connect 将redux中的数据和行为传递到App组件
// connect 接受两个参数,第一个是回调,用来从redux取状态,返回一个状态对象
// 第二个参数是对象,,是行为数据,下面的写法其实就是{increament:increament，decreament：decreament }, 键名是传递个App的属性,值是action,通过action函数可以创建出action对象


// 上面的App是ui组件,这里返回的是容器组件,很显然容器组件包含着ui组件,因此可以进行改造,将上面的App改为暴露一个Counter组件,,将这里的容器组件抽取到container文件加下,命名为App
// export default connect(
//   state => ({count: state}),
//   {increament, decreament}
// )(App)
