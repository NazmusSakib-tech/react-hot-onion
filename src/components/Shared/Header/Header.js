
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, logOut} = useFirebase();
    
    
    return (
        <div className="header">
            {/* <Link to="/home">Home</Link>
            <Link to="/placeorder">Place Order</Link>
            <Link to="/login">Login</Link>
            <span> {user.displayName}</span>
            {user?.email&& <button onClick={logOut} className="btn btn-danger">LogOut</button>
            }
            <Link to="/register">Register</Link> */}
        </div>
    );
};

export default Header;