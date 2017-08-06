import actions from '../../actions'
import axios from 'axios'

const apiurl = '/admin/rest/meetings'

const initialState = {
  items: [],
  page: {},
  current: {}
}

export default function table(state = initialState, action) {
  switch (action.type) {
    case actions.meetings.LOAD_OK:
      return Object.assign({}, state, {items: action.result}, {page: action.page});
    case actions.meeting.LOAD_OK:
      return Object.assign({}, state, {current: action.result});
    default:
      return state
  }
}

const loadMeetingsOK = (result, page) => 
  ({ type: actions.meetings.LOAD_OK, result, page })

const loadMeetingOK = (result) => 
  ({ type: actions.meeting.LOAD_OK, result })

export const loadMeetings = (page = 0) => {
  return (dispatch) => {
    axios.get(`${apiurl}?page=${page}`)
    .then(function(resp) {
      dispatch(loadMeetingsOK(resp.data._embedded.meetings, resp.data.page));
    })
    .catch(function(error) {

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