import React from 'react'
import styles from './TopAbout.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'

const TopAbout = () => {
  return (
    <section className={styles.topAbout}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <SectionTitle 
            enText="About" 
            enSubText="Me" 
            jaText="私について"
            enMainColor="#000"
            enSubColor="#fff"
            jaColor="#fff"
            boxColor="#ccc"
        />
        </div>
        

        <div className={styles.text}>
          <h3 className={styles.name}>
            <span className={styles.name_en}>Minori Komeichi</span>
            <span className={styles.name_ja}>古明地 みのり</span>
          </h3>
          <p className={styles.summary}>
            1997年2月生まれ。<br/>
            北海道の田舎町で育つ。<br/>
            大学卒業後、大学病院で２年勤務。<br/>
            看護師として働く中で、「いつ何が起こるかわからない、やれる時にやりたい事に挑戦したい」と思うようになり、以前から興味のあったWeb業界への転職を決意する。
          </p>
          <h4 className={styles.list_title}>経歴</h4>
          <dl className={styles.dl_layout}>
            <dt className={styles.list_item_title}>2021年</dt>
            <dt className={styles.list_item}>弘前大学卒業</dt>

            <dt className={styles.list_item_title}>2021年</dt>
            <dd className={styles.list_item}>大学病院に看護師として入職</dd>

            <dt className={styles.list_item_title}>2023年</dt>
            <dd className={styles.list_item}>求職者支援訓練校入校</dd>
          </dl>

          <h4 className={styles.list_title}>スキル</h4>
          <ul className={styles.ul_layout}>
            <li>Photoshop / illustrator 
              <span  className={styles.ul_list_layout}>---デザイン作成、写真加工</span></li>
            <li>HTML / CSS / Wordpress 
              <span className={styles.ul_list_layout}>---LP、WEBサイト作成</span></li>
            <li>JavaScript / React / Next Js  
              <span className={styles.ul_list_layout}>---学習中</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TopAbout