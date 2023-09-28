import React from 'react'
import Image from 'next/image'
import styles from './About.module.css'

// コンポーネント
import SectionTitle from '../compornents/SectionTitle/SectionTitle'
import Skills from '../compornents/Skills/Skills'
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
            />
            <p className={styles.intro}>
            &emsp;「相手の期待以上のものを作り出すこと」を日々意識して業務に取り組んできました。<br />
            これまでの経験から、本人も気がついていないニーズに目をむけ、本心を汲み取り、形にして提供する。そうして喜んでもらえた時にやりがいを感じると実感しました。<br />
            &emsp;「相手の期待以上のものを作り出すこと」をこれからも大切にしていきます。
            </p>
            <div className={styles.content}>
                <h3 className={styles.content_title}>「相手の期待以上の成果を出す」ために磨いてきた２つのこと</h3>
                <ul className={styles.philosophy_layout}>
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

        <Skills />
        {/* <Career /> */}

        <section className={styles.profile}>
            <div className={styles.section_title}>
                <SectionTitle 
                enText="Profile"
                jaText="プロフィール"
                enMainColor="#000"
                jaColor="##9E9E9E"
                boxColor="#9E9E9E"
                />
            </div>
            <div className={styles.profile_layout}>
                <div className={styles.img_box}>
                    <Image
                    src='/profile.jpg'
                    alt='me'
                    fill
                    className={styles.img}
                    />
                </div>
                <div className={styles.text}>
                    <h3 className={styles.name}>
                        <span className={styles.name_en}>Minori Komeichi</span>
                        <span className={styles.name_ja}>古明地 みのり</span>
                    </h3>
                    <p className={styles.summary}>
                        1997年2月生まれ。北海道の田舎町で育つ。<br/>
                        大学卒業後、大学病院で２年勤務。<br/>
                        看護師として働く中で、「いつ何が起こるかわからない、やれる時にやりたい事に挑戦したい」と思うようになり、以前から興味のあったIT業界への転職を決意する。
                    </p>
                    <div className={styles.profile_list}>
                        <h4 className={styles.list_title}>経歴</h4>
                        <dl className={styles.dl_layout}>
                            <dt className={styles.list_item_title}>2021年</dt>
                            <dt className={styles.list_item}>弘前大学卒業</dt>

                            <dt className={styles.list_item_title}>2021年</dt>
                            <dd className={styles.list_item}>大学病院に看護師として入職</dd>

                            <dt className={styles.list_item_title}>2023年</dt>
                            <dd className={styles.list_item}>求職者支援訓練校入校</dd>
                    </dl>
                    <div className={styles.profile_list}>
                        <h4 className={styles.list_title}>趣味</h4>
                        <ul className={styles.ul_layout}>
                            <li>アウトドア
                                <span  className={styles.ul_list_layout}>登山、サイクリング、ボルダリング、キャンプなど</span></li>
                            <li>実家の猫と遊ぶ 
                                <span className={styles.ul_list_layout}>いかに猫がくいつくかを研究中</span></li>
                        </ul>
                    </div>
                    
                    </div>
                    
                </div>
            </div>
            
        </section>

    
    </div>
)
}

export default page