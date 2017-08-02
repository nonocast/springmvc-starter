import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMeeting, reset } from './MeetingRedux'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableFooter,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Moment from 'react-moment';
import filesize from 'filesize'
import 'moment/locale/zh-cn'

class Meeting extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.loadMeeting(this.props.match.params.id);
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

    return (
      <div>
        <h1>{meeting.title}</h1>
        <FlatButton style={style} backgroundColor="#eee">Add Document</FlatButton>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Filename</TableHeaderColumn>
              <TableHeaderColumn>Size</TableHeaderColumn>
              <TableHeaderColumn>CreatedAt</TableHeaderColumn>
              <TableHeaderColumn>Operation</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              meeting.documents.map((each) =>
                <TableRow key={each.id}>
                  <TableRowColumn>{each.title}</TableRowColumn>
                  <TableRowColumn>{each.path}</TableRowColumn>
                  <TableRowColumn>{filesize(each.size)}</TableRowColumn>
                  <TableRowColumn><Moment fromNow>{each.updatedAt}</Moment></TableRowColumn>
                  <TableRowColumn>
                    <div>
                      <FlatButton style={{ minWidth: 36, marginRight: 10 }}><a href={`http://localhost/download/${each.id}/${each.path}`}>Download</a></FlatButton>
                      <FlatButton style={{ minWidth: 36, marginRight: 10 }}>Edit</FlatButton>
                      <FlatButton style={{ minWidth: 36 }}>Delete</FlatButton>
                    </div>
                  </TableRowColumn>
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