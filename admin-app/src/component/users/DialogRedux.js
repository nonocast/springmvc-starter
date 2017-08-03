const initialState = {
  user: null,
  visible: false
}

export default function dialog(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_USER_MODAL': {
      return {
        ...state,
        visible: true,
        user: action.user
      };
    }

    case 'HIDE_USER_MODAL': {
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
  return {
    type: 'SHOW_USER_MODAL',
    user
  };
}

export function closeDialog() {
  return {
    type: 'HIDE_USER_MODAL'
  };
}