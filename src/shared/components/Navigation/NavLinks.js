import React from 'react';
import { NavLink  } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props =>{
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>Les Professeurs</NavLink>
            </li>
            <li>
                <NavLink to="/u1/Modules">Les Modules</NavLink>
            </li>
            <li>
                <NavLink to="/Modules/new">Ajouter Module</NavLink>
            </li>
            <li>
                <NavLink to="/auth">Authenticate</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;