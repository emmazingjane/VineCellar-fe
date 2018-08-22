import React, { Component } from 'react';

const Header = (props) =>{
   
    return(
        <div>
            <header>
                <div>
                    { props.isAuthed
                            
                    ? 
                    <nav className="logInNav">
                            <a  className="homePageLink" href="/register">Create an Account</a>
                            <a  className="homePageLink" href="/login">Log In</a>
                    </nav>
                    : 
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                            <a className="navbar-brand " href="#">Vine Cellars</a>
                        <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                <a className="nav-link">hold</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link">hold</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#" onClick={props.handleLogout}>Log Out</a>
                                </li>
                            </ul>
                    </nav>}
                </div>
            </header>
        </div>
    )


}


export default Header;