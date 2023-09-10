import React from 'react';
import Link from 'next/link';
import styles from './TopWorks.module.css';
// コンポーネント
import SectionTitle from '../SectionTitle/SectionTitle';
import BackgroundSlider from '../BackgroundSlider/BackgroundSlider';

const TopWorks = () => {
  return (
    <section className={styles.topWorks}>
      <div className={styles.mainvisual}>
        <BackgroundSlider />
        <div className={styles.topWorks_title}>
          <SectionTitle 
          enText="Works" 
          jaText="作品"
          enMainColor="#000"
          jaColor="#ccc"
          boxColor="#ccc"
        />
        </div>
        
      </div>
      <div className={styles.wrapper}>

          <div className={styles.layout}>
            <ul className={styles.works_tag}>
              <li>
                <button>All</button>
                <button>Design</button>
                <button>Web</button>
              </li>
            </ul>

            <div className={styles.text}>テキスト</div>

            <div className={styles.view}>画像</div>

            <div className={styles.menue}>スライダー</div>
          </div>
      </div>
    </section>
  );
};

export default TopWorks;