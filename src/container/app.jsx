

import {connect} from 'react-redux' // 连接的是redux和react
import {increament, decreament,increamentAsync}  from '../redux/actions.js'
import Counter  from '../components/counter'

// 包装返回的新组建就是为了给ui组件传递数据
export default connect(
  state => ({count: state}),
  {increament, decreament,increamentAsync} // 这里的内容应该都来自action
)(Counter)
