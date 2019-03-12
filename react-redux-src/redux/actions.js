/**
  包含所有的action creator，我们知道action是对象，action creator是函数，是专门用来创建action对象的
  这里应该由两种action， 一个是INCREAMENT, 一个是DESCREAMENT
**/

import {INCREAMENT, DCREAMENT} from '../redux/action-types' // 引入ations就不需要了

// 增加的action
export const increament = (number) => ({type: INCREAMENT, data: number})
// 减少的aciton
export const decreament = (number) => ({type: DCREAMENT, data: number})
