import './MessageList.scss';
    
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from '../Message/Message'
    
export default class MessageList extends Component {
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.shape({
            author: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired
        })),
        user: PropTypes.shape({
            login: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired,
    }

    static defaultProps = {
        messages: [],
    }
    
    constructor(props){
        super(props);
    }

    render(){
        const {messages, user} = this.props;
        return(
            <div className="messages">
                {messages.map((comment, idx)=> 
                    <Message key={idx} {...comment} user={user}/>
                )}
            </div>
        )
    }
}