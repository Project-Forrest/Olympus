import React from 'react';
import logo from '../images/Logo1-white.png'

const Navbar = () => (
    <nav className="navbar">
        <a href="/admin">
            <img src={logo} alt="Logo" width="100px"/>
         </a>
         <ul className="nav-itens">
            <li><a href="/admin">Home</a></li>
            <li><a href="/admin">About</a></li>
            <li><a href="/admin">Admin</a></li>
            <li><a href="/admin/new-user">New Gym</a></li>
         </ul>
    </nav>
);

export default Navbar;