import './MessageForm.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            author: '',
            message: '',
        }
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    handleSubmit = (e) => {
        const {onSubmit} = this.props;
        if (typeof onSubmit === 'function'){
            onSubmit(this.state);
        }
    }

    handleChange = (e) =>{
        this.setState(
            {
                [e.target.name]: e.target.value,
            }
        );
    }

    render() {
        return (
            <div className="messageform">
                <p>Автор: <input type="text" name = "author" onChange={this.handleChange} /></p>
                <p>Текст сообщения: <input type="text" name = "message" onChange={this.handleChange} /></p>
                <button onClick={this.handleSubmit}>Отправить</button>
                <br />
            </div>
        )
    }
}