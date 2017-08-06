import actions from '../actions';
import { combineReducers } from 'redux';
import axios from 'axios'

import view, {loadMeeting} from '../component/meeting/ViewRedux';
// import dialog from '../component/meetings/DialogRedux';

const initialState = {
  loading: false,
  progress: 0
}

// reducer
function upload(state = initialState, action) {
  switch (action.type) {
    case actions.meeting.document.UPLOAD:
      return { loading: true, progress: 0 };
    case actions.meeting.document.UPLOAD_PROGRESS: 
      return { loading: true, progress: action.progress }
    case actions.meeting.document.UPLOAD_OK:
      return { loading: false, progress: 0 }
    default:
      return state;
  }
}

export const uploadDocuments = (meeting, formData) => {
  const url = `/admin/rest/meetings/${meeting.id}/documents`;
  return (dispatch) => {
    dispatch({ type:actions.meeting.document.UPLOAD })

    // https://xhr.spec.whatwg.org/#events
    let xhr = new XMLHttpRequest();

    xhr.onloadend = () => {
      dispatch(loadMeeting(meeting.id));
      setTimeout(() => { dispatch({ type:actions.meeting.document.UPLOAD_OK }); }, 3000);
    }

    xhr.upload.onprogress = (e) => {
　　　　if (e.lengthComputable) {
　　　　　　var complete = (e.loaded / e.total * 100 | 0);
          dispatch({type: actions.meeting.document.UPLOAD_PROGRESS, progress: complete})
　　　　}
　　};
    xhr.open('post', url);
    xhr.send(formData);
  }
}

export default combineReducers({
  upload,
  view
});

export * as viewActions from '../component/meeting/ViewRedux';
// export * as dialogActions from '../component/meetings/DialogRedux';