import './Header.scss';
    
import React, { Component } from 'react';
import PropTypes from 'prop-types';
    
export default class Header extends Component {
    static propTypes = {}

    static defaultProps = {}

    render(){
        return(
            <header className="header"></header>
        )
    }
}