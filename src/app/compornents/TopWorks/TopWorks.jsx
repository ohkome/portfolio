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
        {/* <ul className={styles.itemWrapper}>
          <li className={styles.item}>
            <h3 className={styles.title}>Design</h3>
            <p className={styles.text}>何を伝えたいか、デザインを通してどのようなアクションをして欲しいか、目的や優先順位を確認しながらデザインを考えています。</p>
          </li>
          <li className={styles.item}>
            <h3 className={styles.title}>Web</h3>
            <p className={styles.text}>他人が見た時にどういう意図でコーディングしているのかがわるように、見やすいコードを意識して制作しています。</p>
          </li>
        </ul> */}
        
        
      
    </section>
  );
};

export default TopWorks;