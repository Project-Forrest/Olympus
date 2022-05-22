import React from 'react';
import logo from '../images/Logo1-white.png'

const Navbar = () => (
    <nav class="navbar">
        <a href="/">
            <img src={logo} alt="Logo" width="100px"/>
         </a>
         <ul class="nav-itens">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Admin</a></li>
         </ul>
    </nav>
);

export default Navbar;