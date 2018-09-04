import {combineReducers} from 'redux';
import input from './inputReducer'
import inputsArr from './tasksReducer'
import editField from './editFieldReducer'

const rootReducer = combineReducers({input,inputsArr,editField});
export default rootReducer;
