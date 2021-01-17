import './Header.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.user.login === null) {
            return null;
        }
        return (
            <header className="header">
                <Link to="/profile">Мой профиль</Link>
                <Link to="/addchat">Новый чат</Link>
            </header>
        )
    }
}

const mapStateToProps = state => (
    {
        user: state.user.user,
    }
);


export default connect(mapStateToProps)(Header)