import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import {
  Link,
  NavLink
} from 'react-router-dom'
import './Sidebar.css'

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static contextTypes = {
      router: PropTypes.shape({
        history: PropTypes.object.isRequired,
        route: PropTypes.object.isRequired,
        staticContext: PropTypes.object
      })
    }

    componentWillMount() {
      this.rules = {
        '^/meeting':     1,
        '^/room':        2,
        '^/device':      3,
        '^/user':        4,
        '^/helpdesk':    5
      }

      this.setState({selectIndex: 0});
      this.match(this.context.router.route.location.pathname);

      let that = this;

      // react-router v4
      const history = this.context.router.history;
      history.listen((location, action) => {
        that.match(location.pathname);
      });
    }

    match(pathname) {
      for (var each in this.rules) {
        if(pathname.match(each)) {
          this.setState({selectedIndex: this.rules[each]})
          break;
        }
      }
    }

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

class Sidebar extends Component {
  render() {
    return (
        <Drawer open={this.props.open}>
          <AppBar 
            className="sidebar"
            showMenuIconButton={false} 
            title="Meeting Studio" 
            onTitleTouchTap={this.props.onToggleDrawer} />
          <SelectableList> 
            <Subheader>Today is July 19, 2017.</Subheader>
            <ListItem
            value={1}
            primaryText="Meeting"
            leftIcon={<ContentInbox />}
            containerElement={<NavLink to="/"/>} 
            />
            <ListItem
            value={2}
            primaryText="Meeting Rooms"
            leftIcon={<ActionGrade />}
            containerElement={<NavLink to="/room"/>} 
            />
            <ListItem
            value={3}
            primaryText="Device"
            leftIcon={<ContentSend />}
            containerElement={<Link to="/device"/>} 
            />
            <ListItem
            value={4}
            primaryText="User"
            leftIcon={<ContentDrafts />}
            containerElement={<Link to="/user"/>} 
            />
            <ListItem
            value={5}
            primaryText="Help Desk"
            leftIcon={<ContentInbox />}
            containerElement={<Link to="/helpdesk"/>} 
            />
          </SelectableList>
        </Drawer>
    );
  }
}

export default Sidebar;