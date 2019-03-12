// 管理多个reducer,该模块包含n个reducer ,reducer接受的参数是固定的，第一个state, 第二个action
// 在该counter中state有两种情况， 一种是增加，一种是减少，因此对应type就是这两种

import {INCREAMENT, DCREAMENT} from './action-types'
export function counter (state = 0, action) { // 初始状态是0 因此可以给一个默认值，state = 0,这是形参默认值
  console.log('counter', state, action)

  // switch (action.type) {
  //   case 'INCREAMENT': // INCREAMENT常量值为了避免被写成，应该将其专门管理起来通过新建action-types.js来管理
  //
  //     return state + action.data // 要增的数据在action中
  //     break;
  //   case 'DCREAMENT':
  //
  //     return state - action.data // 要增的数据在action中
  //     break;
  //   default:
  //
  // }

  switch (action.type) {
    case INCREAMENT: // INCREAMENT常量值为了避免被写成，应该将其专门管理起来通过新建action-types.js来管理

      return state + action.data // 要增的数据在action中
      break;
    case DCREAMENT:

      return state - action.data // 要增的数据在action中
      break;
    default:

  }
}
