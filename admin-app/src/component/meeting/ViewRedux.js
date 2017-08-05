import axios from 'axios'

const initialState = {
  current: null
}

// reducer
function meeting(state = initialState, action) {
  switch(action.type) {
    case 'LOAD_MEETING_OK':
      return { current: action.result };
    case 'RESET_MEETING':
      return { current: null }
    default:
      return state;
  }
}

const apiurl = '/admin/rest/meetings'

const loadMeetingOK = (result) => {
  return {
    type: 'LOAD_MEETING_OK',
    result
  }
}

export const loadMeeting = (id) => {
  return (dispatch) => {
    axios.get(`${apiurl}/${id}`)
    .then(function(resp) {
      dispatch(loadMeetingOK(resp.data));
    })
    .catch(function(error) {
      alert('ViewRedux/loadMeeting: ' + error);
    })
  }
}

export const reset = () => {
  return ({ type: 'RESET_MEETING' })
}

export default meeting;