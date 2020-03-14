import React from 'react';

import logo from '../images/githublogo.png';

export default function Header() {
  return (
    <div>
      <img src={logo} alt='github logo' className='logo' />
    </div>
  );
}
