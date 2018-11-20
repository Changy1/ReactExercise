import { defaultState } from './default-state'
import { COUNT_ADDONE, COUNT_ADDOTHER } from './actionTypes'
const reducer = (previousState = defaultState, action) => {
    let newObj = Object.assign( {}, previousState )
    switch( action.type ){
        case COUNT_ADDONE:
        newObj.count ++;
        break;
            // reducer必须是一个纯函数，也就是说一个action只能生成一个结果，所以我们不能把随机数写在这里
        case COUNT_ADDOTHER:
        newObj.count += action.value;
        break;

        default: break;
    }
    return newObj
}

export default reducer