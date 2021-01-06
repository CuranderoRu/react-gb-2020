import './App.scss';

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from '../Header/Header'
import ChatList from '../ChatList/ChatList'
import MessageList from '../MessageList/MessageList'
import SendMessage from '../SendMessage/SendMessage'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            chats: [
                { name: 'Robot', id: 0 },
                { name: 'John', id: 1 },
                { name: 'Piotr', id: 2 },
                { name: 'Vasja', id: 3 },
            ],
            interval: null,
            newLogin: false,
            user: { login: '', id: 0 }
        }
    }

    isNewLogin(author) {
        const res = this.state.messages.findIndex((item) => item.author === author);
        if (res === -1) {
            return true;
        } else {
            return false;
        }
    }

    handleSubmit = (comment) => {
        if (!comment.author && !this.state.user.id) {
            return;
        }
        const { messages } = this.state;
        const isNewLogin = this.isNewLogin(comment.author)
        this.setState(
            {
                messages: [comment, ...messages],
                newLogin: isNewLogin,
                user: isNewLogin ? { login: comment.author, id: 1 } : this.state.user,
            }
        )
    }

    componentDidUpdate() {
        console.log('Updated');
        if (this.state.newLogin) {
            const { messages } = this.state;
            const interval = setInterval(() => {
                clearInterval(this.state.interval);
                this.setState(
                    {
                        messages: [{ author: 'Robot', message: `Hi, ${messages[messages.length - 1].author}! Welcome to the chat!` }, ...messages],
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
        const { chats, messages } = this.state;
        return (
            <Router>
                <div className="app">
                    <Header />
                    <div className="chat-controls">
                        <ChatList chats={chats} />
                        <SendMessage onSubmit={this.handleSubmit} />
                    </div>
                    <Switch>
                        <Route path ="/chat/:chatId">
                            <MessageList messages={messages} user={this.state.user} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}