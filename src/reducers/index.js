import { combineReducers } from 'redux';
import DataStore from './quesitionStore';

export default combineReducers({
    data: DataStore
})