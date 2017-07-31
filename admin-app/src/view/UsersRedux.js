import { combineReducers } from 'redux';

import table from '../component/user/TableRedux';
import dialog from '../component/user/DialogRedux';

export default combineReducers({
  table,
  dialog
});

export * as tableActions from '../component/user/TableRedux';
export * as dialogActions from '../component/user/DialogRedux';