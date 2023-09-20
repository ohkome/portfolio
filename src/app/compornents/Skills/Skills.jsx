'use client'
import React, { useState, useEffect} from 'react';
import styles from './Skills.module.css';

// コンポーネント
import SectionTitle from '../SectionTitle/SectionTitle';
import Motion from '../Motion/Motion';
import Tooltip from '../Tooltip/Tooltip';

const Skills = () => {
    // motion内のskills
    const skillsData = [
        {
            title: 'Photoshop',
            top: '-200%',
            left: '100%',
            ptop: '0px', // 単位を追加
            mleft: '-200px', // 単位を追加
            time: '1',
            text: '基本的な操作:簡単な画像合成ができます',
        },
        {
            title: 'illustrator',
            top: '100%',
            left: '50%',
            ptop: '100px', // 単位を追加
            pleft: '50px', // 単位を追加
            time: '1',
            text: '',
        },
        {
            title: 'illustrator',
            top: '100%',
            left: '50%',
            ptop: '100px', // 単位を追加
            pleft: '50px', // 単位を追加
            time: '1',
            text: '',
        },
    ];
    

    const [skillItems, setSkillItems] = useState([]);

    useEffect(() => {
        skillsData.forEach((item, index) => {
            const timeoutId = setTimeout(() => {
                setSkillItems(prevItems => [
                    ...prevItems,
                    (
                        <div 
                            key={index}
                            style={{ paddingTop: item.ptop, paddingLeft: item.pleft, paddingRight: item.pright, paddingBottom: item.pbottom, marginLeft: item.mleft}}
                        >
                            <Tooltip
                                top={item.top}
                                left={item.left}
                                text={
                                    <div>
                                        <p>学習期間: {item.time}ヶ月</p>
                                        <p>{item.text}</p>
                                    </div>
                                } 
                                style={{ backgroundColor: '#ddd' }}
                            >
                                <li 
                                    className={styles.li}
                                >
                                    {item.title}
                                </li>
                            </Tooltip>
                        </div>
                    )
                ]);
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
    );
};

export default Skills;