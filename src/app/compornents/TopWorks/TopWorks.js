import React from 'react';
import styles from './TopWorks.module.css';
// コンポーネント
import SectionTitle from '../SectionTitle/SectionTitle';

const TopWorks = () => {
  return (
    <section className={styles.topWorks}> TopWorks
        <div className={styles.wrapper}>
            <SectionTitle 
                enText="Works" 
                jaText="作品"
                enMainColor="#000"
                jaColor="#ccc"
                boxColor="#ccc"
            />
        </div>
    </section>
  );
};

export default TopWorks;