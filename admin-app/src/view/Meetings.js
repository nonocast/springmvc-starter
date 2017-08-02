import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MeetingTable from '../component/meeting/Table';
import MeetingDialog from '../component/meeting/Dialog';
import { tableActions, dialogActions } from './MeetingsRedux';
import FlatButton from 'material-ui/FlatButton'

class Meetings extends Component {
  render() {
    const style = { paddingLeft: 10, paddingRight: 10, marginRight: 10, marginBottom: 15, marginTop: 20 }
    return (
      <div>
        <FlatButton style={style} backgroundColor="#eee" onTouchTap={this.props.dialogActions.openDialog.bind(this, null)}>New Meeting</FlatButton>
        <MeetingTable {...this.props.table} {...this.props.tableActions} {...this.props.dialogActions} />
        <MeetingDialog {...this.props.dialog} {...this.props.dialogActions} />
      </div>
    );
  }
}

const result = connect(
  state => ({
    table: state.meetings.table,
    dialog: state.meetings.dialog,
  }),
  dispatch => ({
    tableActions: bindActionCreators(tableActions, dispatch),
    dialogActions: bindActionCreators(dialogActions, dispatch)
  })
)(Meetings);

export default result;