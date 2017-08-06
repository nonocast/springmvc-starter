import actions from '../../actions'
import axios from 'axios'

const initialState = {
  current: null
}

// reducer
function meeting(state = initialState, action) {
  switch(action.type) {
    case actions.meeting.LOAD_OK:
      return { current: action.result };
    case actions.meeting.RESET:
      return { current: null }
    default:
      return state;
  }
}

const apiurl = '/admin/rest/meetings'

const loadMeetingOK = (result) => {
  return { type: actions.meeting.LOAD_OK, result }
}

export const reset = () => {
  return ({ type: actions.meeting.RESET })
}

export const loadMeeting = (id) => {
  return (dispatch) => {
    axios.get(`${apiurl}/${id}`)
    .then(function(resp) {
      dispatch(loadMeetingOK(resp.data));
    })
    .catch(function(error) {

    })
  }
}

export default meeting;