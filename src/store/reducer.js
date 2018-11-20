import { defaultState } from './defaultState'
import { ADDTODOS, CHANGE_FINISHED, REMOVE_TODO, UPDATE_TITLE } from './actionTypes'
const reducer = (previousState = defaultState, action) => {
    let newObj = Object.assign({}, previousState)
    switch(action.type){
        case ADDTODOS: 
        newObj.todos.push(action.value)
        break;
        
        case CHANGE_FINISHED:
        newObj.todos.forEach(item =>{
            if ( item.id === action.value ) item.isFinished = !item.isFinished
        })
        break;

        case REMOVE_TODO:
        newObj.todos = newObj.todos.filter( item => item.id !== action.value)
        break;

        case UPDATE_TITLE:
        newObj.todos.forEach(item => {
            if (item.id === action.value) item.title = action.title
        }) 
        break;
        
        default: break;
    }
    return newObj
}

export default reducer