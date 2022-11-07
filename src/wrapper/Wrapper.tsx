import React from 'react';
import EnterCode from "../components/EnterCode";
import styles from './Wrapper.module.scss'

const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <EnterCode />
    </div>
  );
};

export default Wrapper;