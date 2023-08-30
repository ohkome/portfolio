import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'
//コンポーネント
import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <div className={styles.Header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.flex}>
          <li className={styles.item}>
            <Link href="/" className={styles.link}>Home</Link>
          </li>
          <li className={styles.item}>
            <Link href="/" className={styles.link}>About</Link>
          </li>
          <li className={styles.item}>
            <Link href="/" className={styles.link}>Works</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header