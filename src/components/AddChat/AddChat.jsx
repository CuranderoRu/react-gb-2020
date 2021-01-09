import './AddChat.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class AddChat extends Component {
    static propTypes = {
        user: PropTypes.shape({
            login: PropTypes.string,
            id: PropTypes.number,
        }),
        onSubmit: PropTypes.func.isRequired,
    }

    static defaultProps = {user: null}

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            id: null,
        };
    }

    handleChange = (event) => {
        switch (event.target.id) {
            case 'addchat-name':
                this.setState({
                    name: event.target.value,
                })
                break;
            case 'addchat-id':
                this.setState({
                    id: event.target.value,
                })
                break;
        }
    }

    handleSubmit = () => {
        this.props.onSubmit({
            name: this.state.name,
            id: this.state.id,
        });
    }

    render() {
        const { user } = this.props;
        if(user===null){
            return null;
        }
        return (
            <form noValidate autoComplete="off" className="addchat">
                <div className="addchat-fieldcontainer">
                    <TextField required id="addchat-name" label="Имя" fullWidth = {true} onChange={this.handleChange} />
                </div>
                <div className="addchat-fieldcontainer">
                    <TextField id="addchat-id" label="id чата" fullWidth = {true} onChange={this.handleChange} />
                </div>
                <div className="addchat-fieldcontainer">
                    <Button onClick={this.handleSubmit}>Добавить</Button>
                </div>
            </form>
        )
    }
}