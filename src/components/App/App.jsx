import './App.scss';

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from '../Header/Header'
import ChatList from '../ChatList/ChatList'
import MessageList from '../MessageList/MessageList'
import LoginForm from '../LoginForm/LoginForm';
import UserProfile from '../UserProfile/UserProfile';
import AddChat from '../AddChat/AddChat';

import { connect } from 'react-redux';
import { loadMessages, addMessageItem } from 'actions/messages';
import { loadChats } from 'actions/chats';
import { userLogin } from 'actions/user';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            interval: null,
            newLogin: null,
            chatId: null,
        }
    }

    initData = () => {
        this.props.loadChats();
        this.props.loadMessages();
    }

    getUser = (creds) => {
        return { login: creds.author, nick: creds.author, id: 1 };
    }

    handleLogin = (creds) => {
        this.props.userLogin(this.getUser(creds));
        this.setState(
            {
                newLogin: true,
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
        // this.setState(
        //     {
        //         user,
        //     }
        // )
    }

    handleAddChat = (item) => {
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
            const { user, addMessageItem } = this.props;
            const interval = setInterval(() => {
                clearInterval(this.state.interval);
                addMessageItem(
                    { comment: { author: 'Bot', message: `Hi, ${user.login}! Welcome to the chat!` },
                    chatId: '0'
                });
                this.setState(
                    {
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
        const { chatId } = this.state;
        const { user } = this.props;
        return (
            <Router>
                <div className="app">
                    <Header />
                    <div className="chat-controls">
                        <ChatList chatId={chatId} />
                        <div className="chat-fields">
                            <LoginForm onSubmit={this.handleLogin} />
                            <Switch>
                                <Route path="/chat/:chatId" render={obj => {
                                    const chatId = obj.match.params.chatId;
                                    return (<MessageList chatId={chatId} onDisplay={this.handleListDisplayed} />);
                                }} />
                                <Route exact path="/profile">
                                    <UserProfile user={user} onSubmit={this.handleUserUpdate} />
                                </Route>
                                <Route exact path="/addchat">
                                    <AddChat user={user} onSubmit={this.handleAddChat} />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => (
    {
        user: state.user.user,
    }
);

const mapDispatchToProps = dispatch => (
    {
        loadChats: () => loadChats(dispatch),
        userLogin: (item) => userLogin(dispatch, item),
        loadMessages: () => loadMessages(dispatch),
        addMessageItem: (item) => addMessageItem(dispatch, item),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(App)