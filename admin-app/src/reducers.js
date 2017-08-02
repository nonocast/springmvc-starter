import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import users from './view/UsersRedux'
import meetings from './view/MeetingsRedux'
import meeting from './view/MeetingRedux'

export default combineReducers({
  users,
  meetings,
  meeting,
  routerReducer
});