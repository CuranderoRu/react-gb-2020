import './MessageList.scss';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Message from '../Message/Message'
import SendMessage from '../SendMessage/SendMessage'

export default class MessageList extends Component {
    static propTypes = {
        messages: PropTypes.object,
        user: PropTypes.shape({
            login: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }),
        chatId: PropTypes.string,
        onSubmit: PropTypes.func.isRequired,
        onDisplay: PropTypes.func.isRequired,
    }

    static defaultProps = {
        messages: {},
        chatId: null,
    }

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.onDisplay(this.props.chatId);
    }

    render() {
        const { messages, user, chatId, onSubmit } = this.props;
        if (user === null || typeof messages[chatId] === 'undefined') {
            return null;
        }
        return (
            <Fragment>
                <SendMessage chatId={chatId} onSubmit={onSubmit} user={user} />
                <div className="messages">
                    {
                        messages[chatId].map((comment, idx) =>
                            <Message key={idx} {...comment} user={user} />
                        )}
                </div>
            </Fragment>
        )
    }
}