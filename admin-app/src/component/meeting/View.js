import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
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
        <Table height="70vh" onRowSelection={this.showTableBtns}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>名称</TableHeaderColumn>
              <TableHeaderColumn>大小</TableHeaderColumn>
              <TableHeaderColumn>修改时间</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              meeting.documents.map((each, i) =>
                <TableRow key={each.id}>
                  <TableRowColumn>{each.title}</TableRowColumn>
                  {/* <TableRowColumn>{each.path}</TableRowColumn> */}
                  <TableRowColumn>{filesize(each.size)}</TableRowColumn>
                  <TableRowColumn><Moment fromNow>{each.updatedAt}</Moment></TableRowColumn>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
    );
  }
}

export default MeetingView;

