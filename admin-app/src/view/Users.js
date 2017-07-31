import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserTable from '../component/user/Table';
import UserDialog from '../component/user/Dialog';
import { tableActions, dialogActions } from './UsersRedux';
import FlatButton from 'material-ui/FlatButton'

class Users extends Component {
  render() {
    const style = { paddingLeft: 10, paddingRight: 10, marginRight: 10, marginBottom: 15, marginTop: 20 }
    return (
      <div>
        <FlatButton style={style} backgroundColor="#eee" onTouchTap={this.props.dialogActions.openDialog}>New User</FlatButton>
        <UserTable {...this.props.table} {...this.props.tableActions} />
        <UserDialog {...this.props.dialog} {...this.props.dialogActions} />
      </div>
    );
  }
}

const result = connect(
  state => ({
    table: state.users.table,
    dialog: state.users.dialog,
  }),
  dispatch => ({
    tableActions: bindActionCreators(tableActions, dispatch),
    dialogActions: bindActionCreators(dialogActions, dispatch)
  })
)(Users);

export default result;