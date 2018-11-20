// 这里就是给stroe分模块了

import { combineReducers } from 'redux'

import count from './counter/reducer'
import message from './message/reducer'

const reducer = combineReducers({
    count, message
})

export default reducer