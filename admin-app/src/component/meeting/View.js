import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Moment from 'react-moment';
import filesize from 'filesize';
import 'moment/locale/zh-cn';
import FlatButton from 'material-ui/FlatButton'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import Open from 'material-ui/svg-icons/action/open-in-new';
import Download from 'material-ui/svg-icons/file/file-download';
import Edit from 'material-ui/svg-icons/image/edit';
import Delete from 'material-ui/svg-icons/action/delete';



class MeetingView extends Component {
  componentDidMount() {

  }

  render() {
    const { meeting } = this.props;
    console.log("@@@ View/render: ", meeting);

    if (meeting == null) return null;

    return (
      <Table height="70vh" onRowSelection={this.showTableBtns} wrapperStyle={{ padding: 16 }}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn style={{ width: "50%" }}>名称</TableHeaderColumn>
            <TableHeaderColumn>大小</TableHeaderColumn>
            <TableHeaderColumn>修改时间</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {
            meeting.documents.map((each, i) =>
              <TableRow key={each.id}>
                <TableRowColumn style={{ width: "50%" }}>
                  <FlatButton href="#" label={each.title} />
                </TableRowColumn>
                <TableRowColumn>{filesize(each.size)}</TableRowColumn>
                <TableRowColumn><Moment fromNow>{each.updatedAt}</Moment></TableRowColumn>
                <TableRowColumn>
                  <IconMenu
                    iconButtonElement={<IconButton><MoreHorizIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    useLayerForClickAway={true}
                  >
                    <MenuItem primaryText="打开" leftIcon={<Open />} />
                    <MenuItem primaryText="下载" leftIcon={<Download />} />
                    <MenuItem primaryText="重命名" leftIcon={<Edit />} />
                    <MenuItem primaryText="移除" leftIcon={<Delete />} />
                  </IconMenu>
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

