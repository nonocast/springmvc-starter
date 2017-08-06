import actions from '../../actions'
import axios from 'axios'

const apiurl = '/admin/rest/users'

const initialState = {
  items: [],
  page: {}
}

export default function table(state = initialState, action) {
  switch (action.type) {
    case actions.users.LOAD_OK:
      return Object.assign({}, state, {items: action.result}, {page: action.page});
    case actions.user.LOAD_OK:
      return Object.assign({}, state, {current: action.result});
    default:
      return state
  }
}

const loadUsersOK = (result, page) => ({
  type: actions.users.LOAD_OK, result, page
})

const loadUserOK = (result) => ({
  type: actions.user.LOAD_OK, result
})

export const loadUsers = (page = 0) => {
  return (dispatch) => {
    axios.get(`${apiurl}?page=${page}`)
    .then(function(resp) {
      dispatch(loadUsersOK(resp.data._embedded.users, resp.data.page));
    })
    .catch(function(error) {
      alert(error);
    })
  };
}

export const loadUser = (id) => {
  return (dispatch) => {
    axios.get(`${apiurl}/${id}`)
    .then(function(resp) {
      dispatch(loadUserOK(resp.data));
    })
    .catch(function(error) {
      alert(error);
    })
  }
}