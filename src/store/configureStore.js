import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);



const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}


export default configureStore;
