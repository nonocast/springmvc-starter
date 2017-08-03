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
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableFooter,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import Moment from 'react-moment';
import filesize from 'filesize'
import 'moment/locale/zh-cn';



class Meeting extends Component {
  constructor(props) {
    super();
    
    this.showTableBtns = this.showTableBtns.bind(this);
    this.isSelected = this.isSelected.bind(this);

    this.state = {
      selected: []
    };
  }

  componentDidMount() {
    this.props.loadMeeting(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.reset();
  }
  showTableBtns(selectedRows) {
    this.setState({
      selected: selectedRows
    });
  }
  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  render() {

    const meeting = this.props.meeting;
    // const style = { paddingLeft: 10, paddingRight: 10, marginRight: 10, marginBottom: 15, marginTop: 20 }
    const displayToolbarBtns = {
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
            <IconButton tooltip="下载" iconStyle={{ opacity: "0.7" }} style={displayToolbarBtns}>
              <FileDownloadIcon />
            </IconButton>
            <IconButton tooltip="重命名" iconStyle={{ opacity: "0.7" }} style={displayToolbarBtns}>
              <EditIcon />
            </IconButton>
            <IconButton tooltip="移除" iconStyle={{ opacity: "0.7" }} style={displayToolbarBtns}>
              <DeleteIcon />
            </IconButton>
            {/* <ToolbarSeparator style={{ display: this.state.tableBtnDisplay ? "inline-block" : "none" }} /> */}

            <RaisedButton
              secondary={true}
              containerElement='label'
              label='上传文档'>
              <input type="file" style={{ display: "none" }} />
            </RaisedButton>

          </ToolbarGroup>
        </Toolbar>
        {/* Table */}
        <Table height="70vh" onRowSelection={this.showTableBtns}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>名称</TableHeaderColumn>
              {/* <TableHeaderColumn>Filename</TableHeaderColumn> */}
              <TableHeaderColumn>大小</TableHeaderColumn>
              <TableHeaderColumn>修改时间</TableHeaderColumn>
              {/* <TableHeaderColumn>Operation</TableHeaderColumn> */}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              meeting.documents.map((each, i) =>
                <TableRow key={each.id}  selected={this.isSelected(i)}>
                  <TableRowColumn>{each.title}</TableRowColumn>
                  {/* <TableRowColumn>{each.path}</TableRowColumn> */}
                  <TableRowColumn>{filesize(each.size)}</TableRowColumn>
                  <TableRowColumn><Moment fromNow>{each.updatedAt}</Moment></TableRowColumn>
                  {/* <TableRowColumn>
                    <IconButton iconStyle={styles.smallIcon} href={`http://localhost/download/${each.id}/${each.path}`}>
                      <FileDownloadIcon />
                    </IconButton>
                    <IconButton iconStyle={styles.smallIcon} href="#">
                      <EditIcon />
                    </IconButton>
                    <IconButton iconStyle={styles.smallIcon} href="#">
                      <DeleteIcon />
                    </IconButton>
                  </TableRowColumn> */}
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}

const result = connect(
  state => ({
    meeting: state.meeting.current,
  }),
  dispatch => ({
    loadMeeting: (id) => dispatch(loadMeeting(id)),
    reset: () => dispatch(reset())
  })
)(Meeting);

export default result;