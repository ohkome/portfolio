import React from 'react'
import Link from 'next/link'
import styles from './TopAbout.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'

const TopAbout = () => {
  return (
    <section className={styles.topAbout}>
      <div className={styles.wrapper}>
        <div className={styles.introduction}>
          <h3 className={styles.intro_title}>魅せ方で、コンテンツに対する印象を変える</h3>
          <p className={styles.intro_text}>
            webサイトでユーザーが感じた印象がコンテンツへの印象にも繋がる。<br className={styles.br}/>
            実際に自分がそう感じ、WEB業界に興味を持つきっかけにもなったからこそ、<br className={styles.br}/>
            ユーザーは何を求めているか、どうやったら使いやすくなるか、<br className={styles.br}/>
            ”魅せ方”を考えながら制作に取り組んでいます。
          </p>
        </div>

        <div className={styles.main}> 
          <div className={styles.title}>
            <SectionTitle 
              enText="About" 
              enSubText="Me" 
              jaText="私について"
              enMainColor="#000"
              enSubColor="#ccc"
              jaColor="#ccc"
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

            <h4 className={styles.list_title}>スキル</h4>
            <ul className={styles.ul_layout}>
              <li>Photoshop / illustrator 
                <span  className={styles.ul_list_layout}>---デザイン作成、写真加工</span></li>
              <li>HTML / CSS / Wordpress 
                <span className={styles.ul_list_layout}>---LP、WEBサイト作成</span></li>
              <li>JavaScript / React / Next.js  
                <span className={styles.ul_list_layout}>---学習中</span></li>
            </ul>
            
            <Link href='/About' className={styles.btn_layout}>
              <span className={styles.btn}>About Page</span>
            </Link>
          </div>
        </div> 
        
        
      </div>
    </section>
  )
}

export default TopAbout