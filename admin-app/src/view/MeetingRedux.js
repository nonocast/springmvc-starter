import { combineReducers } from 'redux';

import view from '../component/meeting/ViewRedux';
// import dialog from '../component/meetings/DialogRedux';

export default combineReducers({
  view
});

export * as viewActions from '../component/meeting/ViewRedux';
// export * as dialogActions from '../component/meetings/DialogRedux';