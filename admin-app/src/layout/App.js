import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Sidebar from './Sidebar'
import Users from '../view/Users'
import NotFound from '../view/NotFound'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isDrawerOpen : true }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    const { isDrawerOpen } = this.state;
    this.setState({ isDrawerOpen: !isDrawerOpen });
  }

  render() {
    const contentStyle = { transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
    contentStyle.marginLeft = this.state.isDrawerOpen ? 256 : 0;

    return (
      <MuiThemeProvider>
        <div>
          <AppBar onLeftIconButtonTouchTap={this.toggleDrawer} />
          <Sidebar docker={false} open={this.state.isDrawerOpen} onToggleDrawer={this.toggleDrawer} />
          <div style={contentStyle} className="main">
            <Switch>
              <Redirect exact from='/' to='/user' />
              <Route path='/user' component={Users} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
