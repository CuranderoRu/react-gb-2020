import './Header.scss';
    
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
    
export default class Header extends Component {
    static propTypes = {
        user: PropTypes.shape({
            login: PropTypes.string,
            id: PropTypes.number,
        }),
    }

    static defaultProps = {user: null}

    constructor(props) {
        super(props);
    }

    render(){
        if(this.props.user === null){
            return null;
        }
        return(
            <header className="header">
                <Link to="/profile">Мой профиль</Link>
                <Link to="/addchat">Новый чат</Link>
            </header>
        )
    }
}