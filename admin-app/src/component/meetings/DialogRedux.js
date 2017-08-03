const initialState = {
  meeting: null,
  visible: false
}

export default function dialog(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_MEETING_MODAL': {
      return {
        ...state,
        visible: true,
        meeting: action.meeting
      };
    }

    case 'HIDE_MEETING_MODAL': {
      return {
        ...state,
        visible: false,
      };
    }

    default:
      return state;
  }
}

export function openDialog(meeting = null) {
  return {
    type: 'SHOW_MEETING_MODAL',
    meeting 
  };
}

export function closeDialog() {
  return {
    type: 'HIDE_MEETING_MODAL'
  };
}