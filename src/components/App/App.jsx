import './App.scss';

import React, { Component, Fragment } from 'react';

import MessageList from '../MessageList/MessageList'
import MessageForm from '../MessageForm/MessageForm'

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            messages: [],
        }
    }

    handleSubmit = (comment) => {
        const {messages} = this.state;
        this.setState(
            {
                messages: [...messages, comment]
            }
        )
    }

    render() {
        const {messages} = this.state;
        return (
            <Fragment>
                <MessageForm onSubmit={this.handleSubmit}/>
                <MessageList messages={messages}/>
            </Fragment>
        )
    }
}