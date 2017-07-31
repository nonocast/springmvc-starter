import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField';

class UserDialog extends Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit() {

  }

  onNameChange(e) {
    this.setState({ name: e.target.value});
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    console.log(this.props.closeDialog);

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.closeDialog}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={false}
        onTouchTap={this.submit}
      />,
    ];

    return (
      <Dialog
          title="New User"
          actions={actions}
          modal={true}
          open={this.props.visible}
        >
        <TextField hintText="Name" onChange={this.onNameChange} /><br />
        <TextField hintText="Email" onChange={this.onEmailChange} />
        </Dialog>
    );
  }
}

export default UserDialog;