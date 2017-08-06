import actions from '../../actions'

const initialState = {
  user: null,
  visible: false
}

export default function dialog(state = initialState, action) {
  switch (action.type) {
    case actions.users.create.OPEN_DIALOG: {
      return {
        ...state,
        visible: true,
        user: action.user
      };
    }

    case actions.users.create.CLOSE_DIALOG: {
      return {
        ...state,
        visible: false,
      };
    }

    default:
      return state;
  }
}

export function openDialog(user = null) {
  return { type: actions.users.create.OPEN_DIALOG, user };
}

export function closeDialog() {
  return { type: actions.users.create.CLOSE_DIALOG };
}