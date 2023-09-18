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
      <SectionTitle 
      enText="Works" 
      jaText="作品"
      enMainColor="#000"
      jaColor="#ccc"
      boxColor="#ccc"
      />

      <ul className={styles.item_box}>
        <li className={styles.item}>
          <Image 
          src='/english.jpg'
          alt='オンライン英会話のバナー'
          width={240}
          height={200}
          />
          <div className={styles.text}>
            <h3>Design</h3>
            <p className={styles.text_content}>何を伝えたいか、デザインを通してどのようなアクションをして欲しいか、目的や優先順位を確認しながらデザインを考えています。</p>
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.text}>
            <h3>Web</h3>
            <p className={styles.text_content}>他人が見た時にどういう意図でコーディングしているのかがわるように、見やすいコードを意識して制作しています。</p>
          </div>
          <Image 
          src='/himawari.png'
          alt='高齢者住宅紹介会社のLP'
          width={300}
          height={200}
          />
        </li>
      </ul>

      <Link href='/About' className={styles.btn_layout}>
        <span className={styles.btn}> Page Works</span>
      </Link>
    </section>
  );
};

export default TopWorks;