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
      
    </div>
  );
}

export default Header