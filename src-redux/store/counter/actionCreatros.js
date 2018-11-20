import { COUNT_ADDONE, COUNT_ADDOTHER } from './actionTypes'

const actionCreators = {
    addone () {
        let action = { type: COUNT_ADDONE }
        return action
    },
    addother ( _count ) {
        let action = { type: COUNT_ADDOTHER, value : _count}
        return action
    },
    randomCount () {
        let action = { type: COUNT_ADDOTHER, value: Math.random()}
        return action
    }
}

export default actionCreators