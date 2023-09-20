'use client'
import React, { useState, useEffect} from 'react'
import styles from './Skills.module.css'

//コンポーネント
import SectionTitle from '../SectionTitle/SectionTitle'
import Motion from '../Motion/Motion'
import Tooltip from '../Tooltip/Tooltip'

const Skills = () => {
    // motion内のskills
    const skillsDate = [
        {
        title: 'Photoshop',
        top: '-200%',
        left: '100%',
        pTOP: '10%',
        PLEFT: '10%',
        time: '1',
        text: '基本的な操作、簡単な画像合成ができます',
        },
        {
        title: 'illustrator',
        top: '100%',
        left: '50%',
        ptop:'100%',
        pleft: '50%',
        text: ''
        },

    ];
    
    const [skillItems, setSkillItems] = useState([]);

    useEffect(() => {
        skillsDate.forEach((item, index) => {
            setTimeout(() => {
                setSkillItems(prevItems => [
                    ...prevItems,
                    (
                        <li style={{ paddingTop: item.ptop, paddingLeft: item.pleft}}>
                            <Tooltip
                            key={item.index}
                            top={item.top}
                            left={item.left}
                            text={
                            <div>
                                <p>学習期間: {item.time}ヶ月</p>
                                <p>{item.text}</p>
                            </div>
                            } 
                            style = {{backgroundColor: '#ddd'}}
                        >
                            <span 
                            className={styles.li}
                            // style= {{position: 'absdolute', top: item.top, left: item.left}}
                            >{item.title}</span>
                        </Tooltip>
                        </li>
                        
                    )
                ])
            }, index * 200);

            // クリーンアップ
            return () => clearTimeout(timeoutId);
        });
    }, []);

    return (
        <section className={styles.skills}>
            <SectionTitle 
            enText="My" 
            enSubText="Skills" 
            jaText="できること"
            enMainColor="#ccc"
            enSubColor="#000"
            jaColor="#ccc"
            boxColor="#fff"
            />
            <div className={styles.intro}>
                <p className={styles.text}>
                少しずつできることを増やし、簡単なデザイン、コーディングを行えるようになりました。<br/>
                現在は更なるスキルアップに向けてJavascriptをベースに学習を進めています。<br/>
                今後はアプリ作成などにも取り組み、より言語への理解を深めていきたいです。
                </p>
                <p className={styles.list}>できること：デザイン作成 / 画像加工 / LP作成 / Webサイト作成</p>
            </div>
            <div className={styles.skills_box}>
                <Motion 
                    trigger = {
                        <button className={styles.button}>
                            comment<span>詳しく見る</span>
                        </button>
                    }
                    child = {
                        <ul className={styles.ul}>
                            {skillItems}
                        </ul>
                    }
                />
            </div>
            
            


        </section>
    )
}
export default Skills