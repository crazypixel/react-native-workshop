import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import firebaseMiddleware from './middlewares/fbMiddleware';

const storeEnhancers = compose(
  applyMiddleware(firebaseMiddleware)
);

const store = createStore(rootReducer, {}, storeEnhancers);

export default store;