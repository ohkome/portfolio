"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Top.module.css';



// コンポーネント
import Title from '../Title/Title';
import Tooltip from '../Tooltip/Tooltip';

const mainvisualLink = [
  // {
  //   href: "#",
  //   src: "/github-icon.png",
  //   alt: "Github",
  // },
  {
    href: "#",
    src: "/resume-icon.png",
    alt: "PDF resume",
  }
]

const Top = () => {
  return (
    <div className={styles.wrapper}>
      {/* mainvisual */}
      <div className={styles.mainvisual_wrap}>
        <div className={styles.img_box}>
          <Image 
          src='/portfolio-test.jpg' 
          alt='me'
          // width={1000}
          // height={600}
          priority={true} 
          fill
          className={styles.img}
          />
        </div>

        <div className={styles.title}>
          <Title 
            intro='Hi! I am Minori Komeichi.' 
            message='Welcome to My Portfolio Website.'
          />
          <div className={styles.icon_box}>
            {mainvisualLink.map((item) =>{
              return(
                <Link key={item.alt} href={item.href} 
                className={styles.link} 
                >
                  <Tooltip 
                  text={item.alt}
                  top='100%'
                  left='50%'
                  transform='translate(-50% -50%)'
                  >
                  <Image 
                  src={item.src} 
                  alt={item.alt} 
                  width={30} 
                  height={30} 
                  className={styles.icon} 
                  />
                  </Tooltip>
                </Link>
              );
            })}
            </div>
        </div>

        <div className={styles.scrolldown}>
          <span className={styles.scroll}>Scroll</span>
        </div>
      </div>

      

    </div>
  )
}

export default Top