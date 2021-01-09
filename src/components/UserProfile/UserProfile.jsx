import './UserProfile.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class UserProfile extends Component {
    static propTypes = {
        user: PropTypes.shape({
            login: PropTypes.string,
            id: PropTypes.number,
        }),
        onSubmit: PropTypes.func.isRequired,
    }

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            login: props.user ? props.user.login : null,
            nick: props.user ? props.user.nick : null,
            id: props.user ? props.user.id : null,
        };
    }

    handleChange = (event) => {
        switch (event.target.id) {
            case 'profile-login':
                this.setState({
                    login: event.target.value,
                })
                break;
            case 'profile-nick':
                this.setState({
                    nick: event.target.value,
                })
                break;
        }
    }

    handleSubmit = () => {
        this.props.onSubmit({
            login: this.state.login,
            nick: this.state.nick,
            id: this.props.user.id,
        });
    }

    render() {
        const { user } = this.props;
        if(user===null){
            return null;
        }
        return (
            <form noValidate autoComplete="off" className="userprofile">
                <div className="userprofile-fieldcontainer">
                    <TextField required id="profile-login" label="Login" defaultValue={user.login} fullWidth = {true} onChange={this.handleChange} />
                </div>
                <div className="userprofile-fieldcontainer">
                    <TextField id="profile-nick" label="Nickname" defaultValue={user.nick} fullWidth = {true} onChange={this.handleChange} />
                </div>
                <div className="userprofile-fieldcontainer">
                    <Button onClick={this.handleSubmit}>Сохранить</Button>
                </div>
            </form>
        )
    }
}