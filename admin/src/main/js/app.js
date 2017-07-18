import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Sidebar from './sidebar'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const style = {
    height: 64
};

const TableExampleSimple = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn>Steve Brown</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>5</TableRowColumn>
                <TableRowColumn>Christopher Nolan</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
        </TableBody>
    </Table>
);

const test = {
    'padding-left': '256px'
}

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
            <AppBar />
            <Drawer>
                <RaisedButton label="Admin" primary={true} fullWidth={true} style={style} />
                <Sidebar />
            </Drawer>
            <div style={test}>
                <TableExampleSimple />
            </div>
        </div>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('react')
);

injectTapEventPlugin();
