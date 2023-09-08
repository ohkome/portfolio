
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Top.module.css'


// コンポーネント
import Title from '../Title/Title'

const navigationMenu = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "About",
  },
  {
    href: "#",
    label: "Works",
  }
]

const mainvisualLink = [
  {
    href: "#",
    src: "/github-icon.png",
    alt: "Github",
  },
  {
    href: "#",
    src: "/resume-icon.png",
    alt: "PDF resume",
  }
]

const Top = () => {
  return (
    <>
      <header className={styles.header}>
        {/* svg-logo */}
        <h1>
          <Link href="/" className={styles.link} >
            <Image 
            src='/logo.svg' 
            alt="mk" 
            priority={false}
            width={100}
            height={50}
            className={styles.logo}
            />
          </Link>
        </h1>
        
        {/* navigationMenu */}
        <nav className={styles.nav}>
          <ul className={styles.nav_flex}>
            {navigationMenu.map((item)=>{
              return(
                <li key={item.label} className={styles.item}>
                  <Link href={item.href} className={styles.link}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      
      {/* mainvisual */}
      <div className={styles.mainvisual_flex}>
        <div className={styles.img}>
          <Image 
          src='/photo.png' 
          alt='me'
          priority={true} 
          fill
          sizes='(max-width: 768px) 50%, 100%'
          className={styles.imgItem}
          />
        </div>

        <div className={styles.title}>
          <Title 
            intro='Hi! I am Minori Komeichi.' 
            message='Welcome to My Portfolio Website.'
          />
          
          {mainvisualLink.map((item) =>{
            return(
            <div key={item.alt} className={styles.link}>
              <Link href={item.href}>
                <Image 
                src={item.src} 
                alt={item.alt} 
                className={styles.icon} 
                width={30} 
                height={30} 
                />
              </Link>
            </div>
            );
          })}
        </div>
      </div>

      <div className={styles.scrolldown}>
        <span className={styles.scroll_ball}></span>
      </div>

    </>
  )
}

export default Top