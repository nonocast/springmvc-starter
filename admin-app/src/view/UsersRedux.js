import { combineReducers } from 'redux';

import table from '../component/users/TableRedux';
import dialog from '../component/users/DialogRedux';

export default combineReducers({
  table,
  dialog
});

export * as tableActions from '../component/users/TableRedux';
export * as dialogActions from '../component/users/DialogRedux';