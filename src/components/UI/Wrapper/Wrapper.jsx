import React from 'react';
import styles from './Wrapper.module.scss';

const Wrapper = ({ children }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default Wrapper;
