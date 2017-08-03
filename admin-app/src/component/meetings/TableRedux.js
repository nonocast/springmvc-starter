import axios from 'axios'

const LOAD_MEETINGS = "LOAD_MEETINGS";
const LOAD_MEETING = "LOAD_MEETING";
const apiurl = '/rest/meetings'

export default function table(state = {
  items: [],
  page: {},
  current: {}
}, action) {
  switch (action.type) {
    case LOAD_MEETINGS:
      return Object.assign({}, state, {items: action.result}, {page: action.page});
    case LOAD_MEETING:
      return Object.assign({}, state, {current: action.result});
    default:
      return state
  }
}

const loadMeetingsOK = (result, page) => ({
  type: LOAD_MEETINGS,
  result,
  page
})

const loadMeetingOK = (result) => ({
  type: LOAD_MEETING,
  result
})

export const loadMeetings = (page) => {
  return (dispatch) => {
    axios.get(`${apiurl}?page=${page}`)
    .then(function(resp) {
      dispatch(loadMeetingsOK(resp.data._embedded.meetings, resp.data.page));
    })
    .catch(function(error) {
      alert(error);
    })
  };
}

export const loadMeeting = (id) => {
  return (dispatch) => {
    axios.get(`${apiurl}/${id}`)
    .then(function(resp) {
      dispatch(loadMeetingOK(resp.data));
    })
    .catch(function(error) {
      alert(error);
    })
  }
}