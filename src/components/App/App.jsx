import './App.scss';

import React, { Component, Fragment } from 'react';

import MessageField from '../MessageField/MessageField'
import MessageForm from '../MessageForm/MessageForm'

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            messages: [],
            interval: null,
            newLogin: false,
        }
    }

    isNewLogin(author){
        const res = this.state.messages.findIndex((item)=>item.author = author);
        if(res === -1){
            return true;
        }else{
            return false;
        }
    }

    handleSubmit = (comment) => {
        const {messages} = this.state;
        this.setState(
            {
                messages: [...messages, comment],
                newLogin: this.isNewLogin(comment.author),
            }
        )
    }

    componentDidUpdate(){
        console.log('Updated');
        if(this.state.newLogin){
            const {messages} = this.state;
            const interval = setInterval(() => {
                clearInterval(this.state.interval);
                this.setState(
                    {
                        messages: [...messages, {author: 'Robot', message: `Hi, ${messages[messages.length-1].author}! Welcome to the chat!`}],
                    }
                )
            }, 300);
            this.setState(
                {
                    newLogin: false,
                    interval,
                }
            )
        }
    }

    render() {
        const {messages} = this.state;
        return (
            <Fragment>
                <MessageForm onSubmit={this.handleSubmit}/>
                <MessageField messages={messages}/>
            </Fragment>
        )
    }
}