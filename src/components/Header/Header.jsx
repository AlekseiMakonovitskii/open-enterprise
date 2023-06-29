import React, { useState } from 'react'
import Logo from '../UI/Logo/Logo';
import styles from './Header.module.scss';
import MenuBtn from '../UI/MenuBtn/MenuBtn';
import Nav from '../UI/Nav/Nav';



const Header = () => {
  const [isOpened, setIsOpened] = useState('close')

  const handleOpen = () => {
    if (isOpened === 'open') {
      setIsOpened('close');
    } else {
      setIsOpened('open');
    }
  }

  const handleCloseClick = () => {
    setIsOpened('close');
  }

  return (
        <header className={styles.header}>
          <div className={styles.logo}>
            <Logo />
          </div>

          <Nav style={isOpened} handleCloseClick={handleCloseClick}/>

          <div className={styles.menu}>
            <MenuBtn onClick={handleOpen} />
          </div>
        </header>
     
  );
};

export default Header;
