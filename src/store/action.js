import { ADDTODOS, CHANGE_FINISHED, REMOVE_TODO, UPDATE_TITLE } from './actionTypes'

const action = {
    addtodos (obj) {
        let action = {type: ADDTODOS, value: obj}
        return action
    },
    changeFinished (id) {
        let action = {type: CHANGE_FINISHED, value: id }
        return action
    },
    removeTodo (id) {
        let action = {type: REMOVE_TODO, value: id}
        return action
    },
    updateTitle (title, id) {
        let action = {type:UPDATE_TITLE, value: id, title: title }
        return action
    }
}

export default action