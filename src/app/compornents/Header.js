import React from 'react'
import styles from './header.module.css'
//コンポーネント
import Logo from './Logo'

const Header = () => {
  return (
    <div className={styles.Header}>Header
        <Logo />
    </div>
  );
}

export default Header