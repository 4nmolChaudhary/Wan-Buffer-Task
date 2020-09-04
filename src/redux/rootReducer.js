import { combineReducers } from 'redux'
import itemReducer from './items/itemReducer'

const rootReducer = combineReducers({
    item: itemReducer
})

export default rootReducer