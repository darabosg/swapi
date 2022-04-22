import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      Header
      <Link to="/species">sp</Link>
      <Link to="/character">char</Link>
      <Link to="/">home</Link>
      <Link to="/asdasd">nope</Link>
    </div>
  );
};

export default Header;
