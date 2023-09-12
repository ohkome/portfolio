import Image from 'next/image'
import styles from './page.module.css'
//コンポーネント
import Top from './compornents/Top/Top'
import TopAbout from './compornents/TopAbout/TopAbout'
import TopWorks from './compornents/TopWorks/TopWorks'

export default function Home() {
  return (
    <main>
      <div className={styles.fixed}>
        <Top />
      </div>
      <div className={styles.flow}>
        <TopAbout />
        <TopWorks
        className={styles.works}
        />
      </div>
    </main>
  )
}
