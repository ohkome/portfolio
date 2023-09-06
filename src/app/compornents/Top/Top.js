
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
            alt="me" 
            priority
            width={100}
            height={50}
            className={styles.logo}
            />
          </Link>
        </h1>
        

        {/* navigationMenu */}
        <nav className={styles.nav}>
          <ul className={styles.flex}>
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
      <div className={styles.layout}>
        <div className={styles.img}>
          <Image 
          src='/photo.png' 
          alt="me" 
          priority
          width={200}
          height={300}
          />
        </div>

        <div className={styles.title}>
          <Title />
          <p className={styles.text}>
            Hi! I am Minori Komeichi.<br />
              Welcome to My Portfolio Website.
          </p>
          <div className={styles.link}>
            {mainvisualLink.map((item) =>{
              return(
                <Link key={item.alt} href={item.href}>
                  <Image 
                  src={item.src} 
                  alt={item.alt} 
                  className={styles.icon} 
                  width={30} 
                  height={30} 
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Top