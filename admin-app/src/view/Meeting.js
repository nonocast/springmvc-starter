import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import SearchIcon from "material-ui/svg-icons/action/search";

// import FileDownloadIcon from "material-ui/svg-icons/file/file-download";
// import IconButton from 'material-ui/IconButton';
// import EditIcon from "material-ui/svg-icons/editor/mode-edit";
// import DeleteIcon from "material-ui/svg-icons/action/delete";
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

import 'moment/locale/zh-cn';


import { bindActionCreators } from 'redux';
import MeetingView from '../component/meeting/View'
import { viewActions } from './MeetingRedux'

class Meeting extends Component {
  constructor(props) {
    super();

    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
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

  handleUpload = (e) => {
    let files = [];
    let formData = new FormData();

    for(let i = 0; i < e.target.files.length; ++i) {
      let file = e.target.files[i];
      console.group("File: ", file.name);
      console.log("size : " + file.size);
      console.log("type : " + file.type);
      console.log("date : " + file.lastModified);
      console.groupEnd();

      formData.append('file[]', file, file.name);
    }

    const url = `/admin/rest/meetings/${this.props.meeting.id}/documents`;

    let xhr = new XMLHttpRequest();
    xhr.onloadend = (() => this.props.viewActions.loadMeeting(this.props.match.params.id)).bind(this);
    xhr.open('post', url);
    xhr.send(formData);
  }

  render() {
    const meeting = this.props.meeting;
    // const buttonDisplay = {
    //   display: this.state.selected.length > 0 ? "inline-block" : "none"
    // };

    if (meeting == null) {
      return null;
    };

    return (
      <div>
        <Tabs inkBarStyle={{ zIndex: 1000 }}>
          <Tab label="基本信息" buttonStyle={{ background: "#7986CB" }}>
            <div style={{ paddingLeft: 16, paddingRight: 16 }}>
              <h2>Tab One</h2>
              <p>This is an example tab.</p>
              <p>You can put any sort of HTML or react component in here. It even keeps the component state!</p>
            </div>
          </Tab>
          <Tab label="议程" buttonStyle={{ background: "#7986CB" }}>
            <div style={{ paddingLeft: 16, paddingRight: 16 }}>
              <h2>Tab Two</h2>
              <p>This is another example tab.</p>
            </div>
          </Tab>
          <Tab label="文件" buttonStyle={{ background: "#7986CB" }}>
            <div>
              <Toolbar>
                <ToolbarGroup>
                  <ToolbarTitle text={meeting.title} style={{ color: "#000" }} />
                </ToolbarGroup>

                <ToolbarGroup>
                  {/* <IconButton tooltip="下载" iconStyle={{ opacity: "0.7" }} style={buttonDisplay}>
                    <FileDownloadIcon />
                    </IconButton>
                    <IconButton tooltip="重命名" iconStyle={{ opacity: "0.7" }} style={buttonDisplay}>
                      <EditIcon />
                    </IconButton>
                    <IconButton tooltip="移除" iconStyle={{ opacity: "0.7" }} style={buttonDisplay}>
                      <DeleteIcon />
                    </IconButton>
                  <SearchIcon style={{ marginRight: 4, color: "#9e9e9e" }} /> */}
                  <TextField
                    hintText="搜索文件"
                    style={{ fontSize: "14px" }}
                    underlineFocusStyle={{ borderColor: "#3F51B5" }} />
                  <RaisedButton
                    secondary={true}
                    containerElement='label'
                    label='上传文档'>
                    <input type="file" multiple style={{ display: "none" }} onChange={this.handleUpload} />
                  </RaisedButton>

                </ToolbarGroup>
              </Toolbar>
              <MeetingView {...this.props} />
            </div>
          </Tab>
        </Tabs>

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