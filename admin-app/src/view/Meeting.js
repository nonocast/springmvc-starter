import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router-dom'
import MeetingView from '../component/meeting/View'
import { viewActions } from './MeetingRedux'

class Meeting extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.viewActions.loadMeeting(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    const meeting = this.props.meeting;
    const style = { paddingLeft: 10, paddingRight: 10, marginRight: 10, marginBottom: 15, marginTop: 20 }

    if (meeting == null) {
      return null;
    }

    const buttonStyle = {
     };

    return (
      <div>
        <h1>{meeting.title}</h1>
        <FlatButton style={style} backgroundColor="#eee">Add Document</FlatButton>
        <MeetingView {...this.props} {...this.props.viewActions} />
        {/* <MeetingDialog /> */}
      </div>
    );
  }
}

const result = connect(
  state => ({
    meeting: state.meeting.view.current
  }),
  dispatch => ({
    viewActions: bindActionCreators(viewActions, dispatch)
  })
)(Meeting);

export default result;