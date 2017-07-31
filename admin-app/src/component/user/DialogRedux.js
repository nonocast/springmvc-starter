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

export function openDialog(user) {
  return {
    type: 'SHOW_USER_MODAL'
  };
}

export function closeDialog() {
  return {
    type: 'HIDE_USER_MODAL'
  };
}