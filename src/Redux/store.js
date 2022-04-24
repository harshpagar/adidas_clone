import { applyMiddleware } from "redux";
import { legacy_createStore as store} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers/index'

export const mainstore = store(reducers,{},applyMiddleware(thunk));