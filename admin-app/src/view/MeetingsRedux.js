import { combineReducers } from 'redux';

import table from '../component/meeting/TableRedux';
import dialog from '../component/meeting/DialogRedux';

export default combineReducers({
  table,
  dialog
});

export * as tableActions from '../component/meeting/TableRedux';
export * as dialogActions from '../component/meeting/DialogRedux';