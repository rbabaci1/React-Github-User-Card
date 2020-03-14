import React from 'react';

import logo from '../images/githublogo.png';

export default function Header() {
  return (
    <div className='logo'>
      <img src={logo} alt='github logo' />
    </div>
  );
}
