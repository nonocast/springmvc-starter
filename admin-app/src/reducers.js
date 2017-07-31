import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import users from './view/UsersRedux'

export default combineReducers({
  users,
  routerReducer
});