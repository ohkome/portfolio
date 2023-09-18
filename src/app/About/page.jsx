import React from 'react'
import styles from './About.module.css'
import SectionTitle from '../compornents/SectionTitle/SectionTitle'

const page = () => {
return (
    <div className={styles.about}>
        <section className={styles.philosophy}>
            <SectionTitle 
                enText="Philosophy" 
                jaText="大切にしてきたこと"
                enMainColor="#000"
                jaColor="#fff"
                boxColor="#fff"
                className={styles.section_title}
            />
            <p className={styles.intro}>
            &emsp;これまでの経験から、本人も気がついていないニーズに目をむけ、本心を汲み取り、形にして提供する。そうして喜んでもらえた時にやりがいを感じると実感しました。<br />
            &emsp;「相手の期待以上のものを作り出すこと」を日々意識しています。<br />
            </p>
            <div className={styles.content}>
                <h3 className={styles.content_title}>「相手の期待以上の成果を出す」ために磨いてきた２つのこと</h3>
                <ul className={styles.layout}>
                    <li className={styles.item}>
                        <dl>
                            <dt className={styles.item_title}>相手の意図を汲み取る力</dt>
                            <dd className={styles.item_text}>
                                前職では、相手の話をしっかり聞いた上で、相手の置かれている状況を考察し、相手が求めているものは何かを考えることを日々行ってきました。きちんと対話することで、お互いの思いこみや認識のズレを確認でき、本当に必要なものを見つけることができました。
                            </dd>
                        </dl>
                    </li>
                    <li className={styles.item}>
                        <dl>
                            <dt className={styles.item_title}>自走力</dt>
                            <dd className={styles.item_text}>
                            「より良い成果を出したい」という思いがあるため、自走力があります。毎日勉学を欠かさず、スキルアップに勤めてきました。時には期待に応えるだけのスキルがないこともありましたが、上司や先輩に相談し、力を借りることで補ってきました。都度自分のできる最大のことを行う力を磨いてきました。
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </section>

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
)
}

export default page