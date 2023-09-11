import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import styles from './TopWorks.module.css';
// コンポーネント
import SectionTitle from '../SectionTitle/SectionTitle';
import BackgroundSlider from '../BackgroundSlider/BackgroundSlider';

const TopWorks = () => {

  const worksDesign = [
    {
      src: '/mosya.jpg',
      alt: '名刺',
      href: '#'
    },
    {
      src: '/mosya.jpg',
      alt: 'オンライン英会話のバナー',
      href: ''
    },
    {
      src: '/mosya.jpg',
      alt: '店内ポップ',
      href: ''
    },
    {
      src: '/mosya.jpg',
      alt: 'ショップカード',
      href: ''
    },
    {
      src: '/mosya.jpg',
      alt: '母の日ポストカード',
      href: ''
    },
  ]

  const worksWeb = [
    {
      src: '/mosya.jpg',
      alt: 'LP-高齢者住宅紹介(架空)',
      href: ''
    },
    {
      src: '/mosya.jpg',
      alt: 'Webサイト-カフェ(架空)-',
      href: ''
    },
    {
      src: '/mosya.jpg',
      alt: 'LP-登山ツアー(架空)',
      href: ''
    },
    {
      src: '/mosya.jpg',
      alt: 'Webサイト-ポートフォリオサイト-',
      href: ''
    },
    {
      src: '/mosya.jpg',
      alt: 'LP-職業訓練校の一例',
      href: ''
    },
  ]

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
          <div className={styles.layout_flex}>
            <h3 className={styles.works_tag}>Design</h3>

            <ul className={styles.layout_grid}>
              {worksDesign.map((item,index) => {
                return(
                  <li key={index} className={styles.works_item}>
                    <Link href={item.href}>
                      <Image 
                      src={item.src} 
                      alt={item.alt} 
                      fill
                      sizes='(max-width: 768px) 50%, 100%'
                      className={styles.works_img}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={`${styles.layout_flex} ${styles.reverce}`}>
            <h3 className={styles.works_tag}>Web</h3>

            <ul className={styles.layout_grid}>
              {worksWeb.map((item,index) => {
                return(
                  <li key={index} className={styles.works_item}>
                    <Link href={item.href}>
                      <Image 
                      src={item.src} 
                      alt={item.alt} 
                      fill
                      sizes='(max-width: 768px) 50%, 100%'
                      className={styles.works_img}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
      </div>
    </section>
  );
};

export default TopWorks;