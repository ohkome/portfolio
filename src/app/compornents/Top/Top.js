import React from 'react'
import styles from './Top.module.css'

// コンポーネント
import Header from '../Header/Header'


const Top = () => {
  return (
    <div className={styles.grid}>
      <Header />
    </div>
  )
}

export default Top