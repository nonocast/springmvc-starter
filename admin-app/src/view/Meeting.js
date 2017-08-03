import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMeeting, reset } from './MeetingRedux';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FileDownloadIcon from "material-ui/svg-icons/file/file-download";
import EditIcon from "material-ui/svg-icons/editor/mode-edit";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import { Link } from 'react-router-dom';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Moment from 'react-moment';
import filesize from 'filesize'
import 'moment/locale/zh-cn';


import { bindActionCreators } from 'redux';
import MeetingView from '../component/meeting/View'
import { viewActions } from './MeetingRedux'

class Meeting extends Component {
  constructor(props) {
    super();

    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.isSelected = this.isSelected.bind(this);

    this.state = {
      selected: []
    };
  }

  componentDidMount() {
    this.props.viewActions.loadMeeting(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.viewActions.reset();
  }
  handleRowSelection(selectedRows) {
    this.setState({
      selected: selectedRows
    });
  }
  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  render() {

    const meeting = this.props.meeting;
    const buttonDisplay = {
      display: this.state.selected.length > 0 ? "inline-block" : "none"
    };

    if (meeting == null) {
      return null;
    };

    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text={meeting.title} />
          </ToolbarGroup>
          <ToolbarGroup>
            <IconButton tooltip="下载" iconStyle={{ opacity: "0.7" }} style={buttonDisplay}>
              <FileDownloadIcon />
            </IconButton>
            <IconButton tooltip="重命名" iconStyle={{ opacity: "0.7" }} style={buttonDisplay}>
              <EditIcon />
            </IconButton>
            <IconButton tooltip="移除" iconStyle={{ opacity: "0.7" }} style={buttonDisplay}>
              <DeleteIcon />
            </IconButton>

            <RaisedButton
              secondary={true}
              containerElement='label'
              label='上传文档'>
              <input type="file" style={{ display: "none" }} />
            </RaisedButton>

          </ToolbarGroup>
        </Toolbar>
        <MeetingView />
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