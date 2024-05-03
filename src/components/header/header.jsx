import React from 'react';

import './header.scss';

const Header = ({header_title, header_content}) => {
  return (
    <header className='header_container'>
      <h1 className='header_container_title'>{header_title}</h1>
      <p className='header_container_content'>{header_content}</p>
    </header>
  );
}

export default Header;
