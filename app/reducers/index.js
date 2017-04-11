import { combineReducers } from 'redux'
import * as hittersReducer from './hitters'
import * as navigationReducer from './navigation'

export default combineReducers(Object.assign(
    hittersReducer,
    navigationReducer,
));