import './Message.scss';
    
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
    
export default class Message extends Component {
    static propTypes = {
        author: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    }

    render(){
        const {author, message} = this.props;
        return(
            <div className="message">
                <h2>Автор: {author}</h2>
                <p>Сообщение: {message}</p>
            </div>
        )
    }
}