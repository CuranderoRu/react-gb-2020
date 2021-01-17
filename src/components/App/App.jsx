import './App.scss';

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from '../Header/Header'
import ChatList from '../ChatList/ChatList'
import MessageList from '../MessageList/MessageList'
import LoginForm from '../LoginForm/LoginForm';
import UserProfile from '../UserProfile/UserProfile';
import AddChat from '../AddChat/AddChat';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: {
                '0': [],
            },
            chats: [],
            interval: null,
            newLogin: null,
            user: null,
            chatId: null,
        }
    }

    initData = () => {
        let { chats, messages } = this.state;
        chats = [
            { name: 'Bot', id: '0' },
            { name: 'John', id: '1' },
            { name: 'Piotr', id: '2' },
            { name: 'Vasja', id: '3' },
        ];
        messages['0'] = [];
        messages['1'] =
            [
                { author: 'John', message: 'id_1_test_1' },
                { author: 'me', message: 'id_1_test_2' },
                { author: 'John', message: 'id_1_test_3' },
                { author: 'me', message: 'id_1_test_4' },
                { author: 'John', message: 'id_1_test_5' },
            ];
        messages['2'] =
            [
                { author: 'Piotr', message: 'id_2_test_1' },
                { author: 'me', message: 'id_2_test_2' },
                { author: 'Piotr', message: 'id_2_test_3' },
                { author: 'me', message: 'id_2_test_4' },
                { author: 'Piotr', message: 'id_2_test_5' },
            ];
        messages['3'] =
            [
                { author: 'Vasja', message: 'id_3_test_1' },
                { author: 'me', message: 'id_3_test_2' },
                { author: 'Vasja', message: 'id_3_test_3' },
                { author: 'me', message: 'id_3_test_4' },
                { author: 'Vasja', message: 'id_3_test_5' },
            ];

        this.setState(
            {
                messages,
                chats,
            }
        )
    }

    handleSubmit = (comment, chatId) => {
        const { messages } = this.state;
        messages[chatId] = [comment, ...messages[chatId]];
        this.setState(
            {
                messages,
            }
        )
    }

    getUser = (creds) => {
        return { login: creds.author, nick: creds.author, id: 1 };
    }

    handleLogin = (creds) => {
        this.setState(
            {
                newLogin: true,
                user: this.getUser(creds),
                chatId: '0',
            }
        )
        this.initData();
    }

    handleChatChange = (chatId) => {
        this.setState(
            {
                chatId,
            }
        )
    }

    handleUserUpdate = (user) => {
        this.setState(
            {
                user,
            }
        )
    }

    handleAddChat = (item) =>{
        let { chats, messages } = this.state;
        messages[item.id] = [];
        this.setState(
            {
                chats: [item, ...chats],
                messages: messages,
            }
        )
    }

    handleListDisplayed = (chatId) => {
        this.setState(
            {
                chatId,
            }
        )
    }

    componentDidUpdate() {
        if (this.state.newLogin) {
            const { messages, user } = this.state;
            const interval = setInterval(() => {
                clearInterval(this.state.interval);
                messages['0'] = [{ author: 'Bot', message: `Hi, ${user.login}! Welcome to the chat!` }, ...messages['0']];
                this.setState(
                    {
                        messages,
                        newLogin: false,
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
        const { chats, messages, user, chatId } = this.state;
        return (
            <Router>
                <div className="app">
                    <Header user={user}/>
                    <div className="chat-controls">
                        <ChatList chats={chats} chatId = {chatId}/>
                        <div className="chat-fields">
                            <LoginForm onSubmit={this.handleLogin} />
                            <Switch>
                                <Route path="/chat/:chatId" render={obj => {
                                    const chatId = obj.match.params.chatId;
                                    return (<MessageList messages={messages} user={user} chatId={chatId} onSubmit={this.handleSubmit} onDisplay={this.handleListDisplayed}/>);
                                }} />
                                <Route exact path="/profile">
                                    <UserProfile user={user} onSubmit={this.handleUserUpdate}/>
                                </Route>
                                <Route exact path="/addchat">
                                    <AddChat user={user} onSubmit={this.handleAddChat}/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}