import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Sidebar from './Sidebar'
import Users from '../view/Users'
import Meetings from '../view/Meetings'
import Meeting from '../view/Meeting'
import NotFound from '../view/NotFound'
import Moment from 'react-moment';
// import 'moment/locale/zh-cn'
// Moment.globalLocale = 'en';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: true,
      today: Date.now()
    }
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
          {/* <AppBar onLeftIconButtonTouchTap={this.toggleDrawer} iconElementRight={<FlatButton label={<Moment date={this.today} format="LL" />} disabled={true} />} /> */}
          <AppBar onLeftIconButtonTouchTap={this.toggleDrawer} style={{ background: "#3F51B5" }} />
          <Sidebar docker={false} open={this.state.isDrawerOpen} onToggleDrawer={this.toggleDrawer} />
          <div style={contentStyle} className="main">
            <Switch>
              <Redirect exact from='/' to='/meeting' />
              <Route path='/meeting/:id' component={Meeting} />
              <Route path='/meeting' component={Meetings} />
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
