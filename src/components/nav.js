import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { fetchStrains } from '../actions/strain-data'
import './nav.css';

export class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.logOut = this.logOut.bind(this);
        this.updateStrains = this.updateStrains.bind(this);
    }
    
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    updateStrains() {
        this.props.dispatch(fetchStrains());
    }

    render() {
        return (
            <ul className="flex-nav">
                <li className="nav-item"><Link to="/" onClick={this.logOut}>Log Out</Link></li>
                <li className="nav-item"><Link to="/dashboard/cabinet" onClick={this.updateStrains}>My Cabinet</Link></li>
                <li className="nav-item"><Link to="/dashboard/create">Create Strain</Link></li>
                <li className="nav-item"><Link to="/dashboard/edit" onClick={this.updateStrains}>Edit Strain</Link></li>
            </ul>
        )
    }
}

export default connect()(Nav);