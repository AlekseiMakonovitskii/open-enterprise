import React from 'react';
import logoImage from '../../../assets/logo.svg';

const Logo = () => {
  return (
    <a href="#">
      <img src={logoImage} alt="Open Enterprise" loading=" lazy"/>
    </a>
  );
};

export default Logo;
