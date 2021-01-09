import "./ChatList.scss";

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default class ChatList extends Component {
  static propTypes = {
    chats: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })
    ),
    chatId: PropTypes.string
  };

  static defaultProps = {chatId: '0'};

  constructor(props) {
    super(props);
    this.state = {
      chatId: props.chatId,
    }
  }

  handleListItemClick = (event, chatId) => {
    this.setState({
      chatId,
    });
  };

  render() {
    const { chats } = this.props;
    const { chatId } = this.state;
    return (
      <div className="chat-wrapper">
        <List component="nav" aria-label="main mailbox folders">
          {chats.map((item, idx) => (
            <Link key={`link_${idx}`} to={`/chat/${item.id}`}>
              <ListItem
                key={`item_${idx}`}
                button
                selected={item.id === chatId}
                onClick={(event) => this.handleListItemClick(event, item.id)}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
  }
}
