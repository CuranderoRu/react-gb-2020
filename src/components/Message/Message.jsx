import styles from './MessageStyle.js';
    
import React, { Component } from 'react';
import PropTypes from 'prop-types';
    
export default class Message extends Component {
    static propTypes = {
        author: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        user: PropTypes.shape({
            login: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }),
    }

    constructor(props){
        super(props);
        console.log('Message constructed');
    }

    render(){
        const {author, message, user} = this.props;
        return(
            <div style={{...styles.message, alignSelf: user.login === author ? 'flex-start' : 'flex-end'}}>
                <h2>{message}</h2>
                <p>{author}</p>
            </div>
        )
    }
}