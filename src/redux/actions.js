/**
  包含所有的action creator，我们知道action是对象，action creator是函数，是专门用来创建action对象的
  这里应该由两种action， 一个是INCREAMENT, 一个是DESCREAMENT

  同步的action返回的是对象
  异步的action返回的是函数,在返回的函数里面才分发action

  action 默认只支持返回对象，只有在store中应用了redex-chunk中间件，才能支持返回函数的写法，既然函数这种形式是redux-chunk才支持的，那么返回的函数一定是由redux-thubk调用的
**/

import {INCREAMENT, DCREAMENT} from '../redux/action-types' // 引入ations就不需要了

// 增加的action
export const increament = (number) => ({type: INCREAMENT, data: number})
// 减少的aciton
export const decreament = (number) => ({type: DCREAMENT, data: number})


// 异步action
// export const increamentAsync = (number) => { // increamentAsync是一个函数，该函数返回一个dispatch函数
//   return dispatch => {// 这里返回的不是action对象，而是返回了一个函数，在函数中执行异步代码
//     // 在这里写异步的代码
//     setTimeout(() => { // 这里在1s之后才分发产生同步的action
//
//       // 这里分发action
//       dispatch(increament(number)) // increament(number) 会产生一个同步的action,这里分发这个action
//     }, 1000)
//   }
// }
// 简写形式，增加一个小括号，直接return一个函数, 但是这个结构比较复杂，因此上面的写法更明确
export const increamentAsync = (number) => (
  dispatch => {
    setTimeout(() => {
      dispatch(increament(number))
    }, 1000)
  }
)
