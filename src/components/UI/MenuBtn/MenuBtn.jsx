import React from 'react';
import styles from './MenuBtn.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';

const MenuBtn = ({onClick}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <AiOutlineMenu size={35}/>
    </button>
  );
};

export default MenuBtn;
