import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import ThunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import reducers from './reducers'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
const middlewares = [middleware, ThunkMiddleware]

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
let store = null;
if (window.navigator.userAgent.includes('Chrome')) {
  store = createStore(
    reducers,
    compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )
} else {
  store = createStore(
    reducers,
    applyMiddleware(...middlewares)
  )
}

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();