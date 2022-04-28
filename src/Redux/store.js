// import { reducer } from "./reducer"
// import { createStore } from 'redux'


// const store = createStore(reducer)


// export {store}

import { createStore,applyMiddleware } from "redux";

import { reducer } from "./reducer";

import thunk from "redux-thunk";


export const store = createStore(reducer,applyMiddleware(thunk));