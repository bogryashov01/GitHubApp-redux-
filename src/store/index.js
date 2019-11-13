import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(  
    thunkMiddleware,
    loggerMiddleware 
  )
)

export default store