import './MessageList.scss';
    
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from '../Message/Message'
    
export default class MessageList extends Component {
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.shape({
            author: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired
        }))
    }

    static defaultProps = {
        messages: [],
    }

    render(){
        const {messages} = this.props;
        return(
            <div className="messagelist">
                {messages.map((comment, idx)=> <Message key={idx} {...comment}/>)}
            </div>
        )
    }
}