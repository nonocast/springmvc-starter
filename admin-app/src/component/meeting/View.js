import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
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

class MeetingView extends Component {
  componentDidMount() {

  }

  render() {
    const { meeting } = this.props;
    console.log("@@@ View/render: ", meeting);

    if(meeting == null) return null;

    return (
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
                    <FlatButton style={{ minWidth: 36, marginRight: 10 }}><a href={`${window.location.protocol}//${window.location.hostname}/download/${each.id}/${each.path}`} target="_blank">Download</a></FlatButton>
                    <FlatButton style={{ minWidth: 36, marginRight: 10 }}>Edit</FlatButton>
                    <FlatButton style={{ minWidth: 36 }}>Delete</FlatButton>
                  </div>
                </TableRowColumn>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    );
  }
}

export default MeetingView;

