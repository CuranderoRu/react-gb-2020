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
        id: PropTypes.number.isRequired,
      })
    ),
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
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
            <Link key={`link_${idx}`} to={`/chat/${item.id}`}>
              <ListItem
                key={`item_${idx}`}
                button
                selected={selectedIndex === idx}
                onClick={(event) => this.handleListItemClick(event, idx)}
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
