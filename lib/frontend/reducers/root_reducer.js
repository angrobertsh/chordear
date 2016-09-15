import { combineReducers } from 'redux';
import notes from './notes_reducer';

const RootReducer = combineReducers({notes});

export default RootReducer;
