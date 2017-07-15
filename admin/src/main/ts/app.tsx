import * as React from "react";
import * as ReactDOM from "react-dom";
import axios from "axios"

class User extends React.Component<any, any> {
    render() {
        return(
            <tr>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.email}</td>
            </tr>
        )
    }
}

class UserList extends React.Component<any, any> {
    render() {
        var users = this.props.users.map(user =>
            <User key={user._links.self.href} user={user}/>
        );
        return (
            <table>
                <tbody>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                    {users}
                </tbody>
            </table>
        )
    }
}

class App extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        axios.get("/rest/users").then(res => {
            this.setState({users: res.data._embedded.users});
        });
    }


    render() {
        return <UserList users={this.state.users}/>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
);
