import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';

const configureStore = () => {
  return createStore(RootReducer, {});
};

export default configureStore;
