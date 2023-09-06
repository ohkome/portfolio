
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Top.module.css'


// コンポーネント
import Logo from '../Logo/Logo'


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
  },
]

const Top = () => {
  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        {/* svg-logo */}
        <Link href="/" className={styles.link} >
          <Logo />
        </Link>

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

      <div className={styles.img}>
        <Image 
        src='/photo.png' 
        alt="me" 
        priority
        width={300}
        height={400}
        />
      </div>
      
      <div className={styles.title}>
        <h1>
          hello
        </h1>
        <p>
            This is My Portfolio.
        </p>
      </div>
    </div>
  )
}

export default Top