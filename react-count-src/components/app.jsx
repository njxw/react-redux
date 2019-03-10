import React ,{Component} from 'react'

export default class App extends Component{
  // 初始化数据
  state = {
    count: 0
  }

  increament = () => {
    // 1.得到新的值
    const num = this.select.value*1
    // 2. 得到原本的状态得到新的状态
    const count = this.state.count + num
    // 3. 更新状态
    this.setState({count})
  }
  descreament = () => {
    // 1.得到新的值
    const num = this.select.value*1
    // 2. 得到原本的状态得到新的状态
    const count = this.state.count - num
    // 3. 更新状态
    this.setState({count})

  }
  inscreamentIfOdd = () => {
    // 1.得到新的值
    const num = this.select.value*1
    // 2. 得到原本的状态
    const count = this.state.count
    // 3. 判断，满足条件才更新
    if (count % 2 === 1) {
        this.setState({count: count + num})
    }
  }

  dscreamentAsync = () => {
    // 1.得到新的值
    const num = this.select.value*1
    // 2. 得到原本的状态
    const count = this.state.count
    // 3. 判断，满足条件才更新
    setTimeout (() => {
      this.setState({count: count + num})
    }, 300)
  }
  render () {
    const {count} =this.state
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
