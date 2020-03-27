import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middlewares = [thunk]

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(...middlewares));
    return store;
}