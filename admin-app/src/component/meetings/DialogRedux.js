import actions from '../../actions'

const initialState = {
  meeting: null,
  visible: false
}

export default function dialog(state = initialState, action) {
  switch (action.type) {
    case actions.meetings.create.OPEN_DIALOG: {
      return {
        ...state,
        visible: true,
        meeting: action.meeting
      };
    }

    case actions.meetings.create.CLOSE_DIALOG: {
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
  return { type: actions.meetings.create.OPEN_DIALOG, meeting };
}

export function closeDialog() {
  return { type: actions.meetings.create.CLOSE_DIALOG };
}