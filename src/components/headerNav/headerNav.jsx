import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNavComponent = () => (
    <nav className='headernav_container'>
        <ul className='headernav_container_list'>
            <li className='headernav_container_list_links'><Link to='/'>Accueil</Link></li>
            <li className='headernav_container_list_links'><Link to='/recettes'>Recettes</Link></li>
            <li className='headernav_container_list_links'><Link to='/contact'>Contact</Link></li>
        </ul>
  </nav>
);
export default HeaderNavComponent;
