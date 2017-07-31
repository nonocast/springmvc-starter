import axios from 'axios'

const LOAD_USERS = "LOAD_USERS";
const LOAD_USER = "LOAD_USER";
const apiurl = '/rest/users'

export default function table(state = {
  items: [],
  page: {},
  current: {}
}, action) {
  switch (action.type) {
    case LOAD_USERS:
      return Object.assign({}, state, {items: action.result}, {page: action.page});
    case LOAD_USER:
      return Object.assign({}, state, {current: action.result});
    default:
      return state
  }
}

const loadUsersOK = (result, page) => ({
  type: LOAD_USERS,
  result,
  page
})

const loadUserOK = (result) => ({
  type: LOAD_USER,
  result
})

export const loadUsers = (page) => {
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