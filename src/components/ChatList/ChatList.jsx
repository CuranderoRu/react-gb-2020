import './ChatList.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default class ChatList extends Component {
    static propTypes = {}

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 1,
        }
    }

    handleListItemClick = (event, index) => {
        this.setState({
            selectedIndex: index,
        });
    };

    render() {

        const { selectedIndex } = this.state;
        const { chats } = this.props;

        return (
            <div className="chat-wrapper">
                <List component="nav" aria-label="main mailbox folders">
                    {chats.map((item, idx) => (
                        <ListItem
                            key={idx}
                            button
                            selected={selectedIndex === 0}
                            onClick={(event) => this.handleListItemClick(event, idx)}
                        >
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }
}