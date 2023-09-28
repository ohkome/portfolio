"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Top.module.css';



// コンポーネント
import Title from '../Title/Title';
import Tooltip from '../Tooltip/Tooltip';

const mainvisualLink = [
  // {ギットハブ
  //   href: "#",
  //   src: "/github-icon.png",
  //   alt: "Github",
  // },
  {
    href: "#",
    src: "/resume-icon.png",
    href:"/portfolio.pdf",
    alt: "PDF rortfolio",
  }
]

const Top = () => {
  return (
    <div className={styles.wrapper}>
      {/* mainvisual */}
      <div className={styles.mainvisual_wrap}>
        <div className={styles.img_box}>
          <Image 
          src='/top.jpg' 
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
          <ul className={styles.icon_box}>
            {mainvisualLink.map((item, index) =>{
              return(
                <li 
                className={styles.link}
                key={index}>
                  <Tooltip 
                  text={item.alt}
                  top='100%'
                  left='50%'
                  transform='translate(-50% -50%)'
                  className={styles.Tooltip}
                  >
                    <Link 
                    href={item.href}
                    
                    >
                      <Image 
                      src={item.src} 
                      alt={item.alt} 
                      width={30} 
                      height={30} 
                      className={styles.icon} 
                      />
                    </Link>
                  
                  </Tooltip>
                </li>
              );
            })}
            </ul>
        </div>

        <div className={styles.scrolldown}>
          <span className={styles.scroll}>Scroll</span>
        </div>
      </div>

      

    </div>
  )
}

export default Top