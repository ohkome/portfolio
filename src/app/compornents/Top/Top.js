import React from 'react'
import Image from 'next/image'
import styles from './Top.module.css'


// コンポーネント
import Header from '../Header/Header'


const Top = () => {
  return (
    <div className={styles.grid}>
      <Header className={styles.header}/>
      <div className={styles.img}>
        <Image 
        src='/photo.png' 
        alt="me" 
        priority
        width={300}
        height={400}
        />
        <p className={styles.comment}>Welcom!</p>
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