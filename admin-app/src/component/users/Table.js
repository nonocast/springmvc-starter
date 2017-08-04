import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
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
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UserTable extends Component {
  componentDidMount() {
    this.props.loadUsers();
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  prevPage() {
    this.props.loadUsers(this.props.page.number - 1);
  }

  nextPage() {
    this.props.loadUsers(this.props.page.number + 1);
  }

  render() {
    const { items, page } = this.props;

    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Operation</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              items.map((each) =>
                <TableRow key={each.id}>
                  {/* <TableRowColumn><Link to={`/user/${each.id}`}>{each.name}</Link></TableRowColumn> */}
                  <TableRowColumn>{each.name}</TableRowColumn>
                  <TableRowColumn>{each.email}</TableRowColumn>
                  <TableRowColumn>
                    <div>
                      <FlatButton style={{ minWidth: 36, marginRight: 10 }} onTouchTap={this.props.openDialog.bind(this, each)}>Edit</FlatButton>
                      <FlatButton style={{ minWidth: 36 }} onTouchTap={this.delete}>Delete</FlatButton>
                    </div>
                  </TableRowColumn>
                </TableRow>
              )
            }
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableRowColumn colSpan={3} style={{ float: 'right', paddingTop: 10, paddingRight: 30 }}>
                <div>
                  <span style={{ marginRight: 15, fontSize: 14, color: '#333' }}>{page.number * page.size + 1}-{page.number * page.size + page.size} of {' '} {page.totalElements}</span>
                  <FlatButton style={{ minWidth: 36 }} icon={<NavigationChevronLeft />} onTouchTap={this.prevPage} />
                  <FlatButton style={{ minWidth: 36 }} icon={<NavigationChevronRight />} onTouchTap={this.nextPage} />
                </div>
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}

export default UserTable;