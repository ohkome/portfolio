import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import styles from './TopWorks.module.css';
// コンポーネント
import SectionTitle from '../SectionTitle/SectionTitle';
import BackgroundSlider from '../BackgroundSlider/BackgroundSlider';

const TopWorks = () => {

  return (
    <section className={styles.topWorks}>
      <div className={styles.mainvisual}>
        <BackgroundSlider />
        <div className={styles.titleWrapper}>
          <SectionTitle 
            enText="Works" 
            jaText="作品"
            enMainColor="#000"
            jaColor="#ccc"
            boxColor="#ccc"
            className={styles.title}
          />
        </div>
        <div className={styles.btn}>
          <Link href='/Works' className={styles.btnLayout}>
            <span className={styles.btnText}> Works Page</span>
          </Link> 
        </div>
        
      </div>
    </section>
  );
};

export default TopWorks;