import { combineReducers } from 'redux';

import table from '../component/meetings/TableRedux';
import dialog from '../component/meetings/DialogRedux';

export default combineReducers({
  table,
  dialog
});

export * as tableActions from '../component/meetings/TableRedux';
export * as dialogActions from '../component/meetings/DialogRedux';