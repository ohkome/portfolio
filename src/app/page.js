import Image from 'next/image'
import styles from './page.module.css'
//コンポーネント
import Top from './compornents/Top/Top'

export default function Home() {
  return (
    <main className={styles.main}>
      <Top />
    </main>
  )
}
