import Image from 'next/image'
import styles from './page.module.css'
//コンポーネント
import Header from './compornents/Header/Header'

export default function Home() {
  return (
    <main className={styles.main}>
        <Header />
    </main>
  )
}
