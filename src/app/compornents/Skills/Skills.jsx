'use client'
import React, { useState, useEffect } from 'react';
import styles from './Skills.module.css';

// コンポーネント
import SectionTitle from '../SectionTitle/SectionTitle';
import Motion from '../Motion/Motion';
import Tooltip from '../Tooltip/Tooltip';

const Skills = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedSkillsData, setSelectedSkillsData] = useState([]);

    // motion内のskills
    const skillsData = [
        {
            title: 'Photoshop',
            top: '100%',
            left: '-50%',
            ileft: "20%",
            mtop: '30Vmin',
            pleft: '0%',
            time: '1',
            text: '基本的な操作、簡単な画像合成ができます',
        },
        {
            title: 'illustrater',
            top: '-65%',
            left: '110%',
            mtop: '15Vmin',
            ileft: '30%',
            time: '1',
            text: '基本的な操作、簡単なイラスト作成ができます',
        },
        {
            title: 'HTML',
            top: '-150%',
            left: '110%',
            mtop: '25Vmin',
            ileft: '60%',
            time: '3',
            text: '簡単なLPやWebサイトを作成できます',
        },
        {
            title: 'css',
            top: '-100%',
            left: '110%',
            mtop: '55Vmin',
            ileft: '40%',
            time: '3',
            text: '簡単なスタイルやアニメーションを当てることができます',
        },
        {
            title: 'wordpress',
            top: '100%',
            left: '0',
            mtop: '50Vmin',
            ileft: '5%',
            time: '0.5',
            text: '基本的な操作ができます',
        },
        {
            title: 'javascript',
            top: '-100%',
            left: '110%',
            mtop: '5Vmin',
            ileft: '60%',
            time: '2',
            text: '条件分岐やループ、配列などの基礎文法、簡単なDOM操作をすることができます',
        },
        {
            title: 'Figma',
            top: '0',
            left: '100%',
            mtop: '0',
            ileft: '15%',
            time: '0.5',
            text: '基本的な操作、デザインカンプを作ることができます',
        },
        {
            title: 'Adobe XD',
            top: '100%',
            left: '0',
            ileft: '2%',
            mtop: '5Vmin',
            time: '0.5',
            text: '基本的な操作法を理解しています。デザインカンプを作ることができます',
        },
        {
            title: 'React',
            top: '-100%',
            left: '-300%',
            mtop: '45Vmin',
            ileft: '90%',
            time: '1',
            text: '調べながら簡単なWEBサイトを作ることができます',
        },
    ];

    const responsiveSkillsData = [
        {
            title: 'Photoshop',
            top: '100%',
            left: '-80%',
            mtop: '25vh',
            ileft: "15%",
            time: '1',
            text: '基本的な操作、簡単な画像合成ができます',
        },
        {
            title: 'illustrater',
            top: '100%',
            left: '0',
            mtop: '30vh',
            ileft: '60%',
            time: '1',
            text: '基本的な操作、簡単なイラスト作成ができます',
        },
        {
            title: 'HTML',
            top: '100%',
            left: '-100%',
            mtop: '38vh',
            ileft: '25%',
            time: '3',
            text: '簡単なLPやWebサイトを作成できます',
        },
        {
            title: 'css',
            top: '20%',
            left: '110%',
            mtop: '50vh',
            ileft: '10%',
            time: '3',
            text: '簡単なスタイルやアニメーションを当てることができます',
        },
        {
            title: 'wordpress',
            top: '80%',
            left: '0',
            mtop: '60vh',
            ileft: '2%',
            time: '0.5',
            text: '基本的な操作ができます',
        },
        {
            title: 'javascript',
            top: '80%',
            left: '-100%',
            mtop: '45vh',
            ileft: '75%',
            time: '2',
            text: '条件分岐やループ、配列などの基礎文法、簡単なDOM操作をすることができます',
        },
        {
            title: 'Figma',
            top: '0',
            left: '110%',
            mtop: '15vh',
            ileft: '5%',
            time: '0.5',
            text: '基本的な操作、デザインカンプを作ることができます',
        },
        {
            title: 'Adobe XD',
            top: '80%',
            left: '-100%',
            ileft: '70%',
            mtop: '1vh',
            time: '0.2',
            text: '基本的な操作。簡単なデザインカンプを作ることができます',
        },
        {
            title: 'React',
            top: '0%',
            left: '-400%',
            mtop: '60vh',
            ileft: '80%',
            time: '1',
            text: '調べながら簡単なWEBサイトを作ることができます',
        },
    ];

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 700px)');

        const updateSelectedSkillsData = () => {
            if (mediaQuery.matches) {
                setSelectedSkillsData(responsiveSkillsData);
            } else {
                setSelectedSkillsData(skillsData);
            }
        };

        updateSelectedSkillsData(); // 初回実行
        mediaQuery.addEventListener('change', updateSelectedSkillsData); // ウィンドウサイズの変更を監視

        // コンポーネントのアンマウント時にリスナーを削除
        return () => {
            mediaQuery.removeEventListener('change', updateSelectedSkillsData);
        };
    }, []);

    // const mediaQuery = window.matchMedia('(max-width: 700px)');
    // const selectedSkillsData = mediaQuery.matche ? responsiveSkillsData : skillsData;

    const comment = () => {
        return(
                    <p>閉じる</p>
                )
    }

    const handleShowAll = () => {
        setShowAll(!showAll);
        if(showAll) {
            const comment = () => {
                
            }
        }else {
            const comment = () => {
                return (
                    <></>
                )
            }
        }
    }

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
                    少しずつできることを増やし、簡単なデザイン、コーディングを行えるようになりました。
                    <br />
                    現在は更なるスキルアップに向けて、Javascriptを中心に学習を進めており、今後はアプリ作成などにも取り組み、より深く言語への理解を深めていきたいです。
                </p>
                <dl className={styles.list}><dt>できること</dt><dd>デザイン作成 / 画像加工 / LP作成 / Webサイト作成</dd></dl>
            </div>
            <div className={styles.skills_box} style={showAll ? { backgroundColor: 'rgba(0,0,0,0.8)' } : { backgroundColor: '#ccc' }}>
                <Motion
                    className={styles.motion}
                    trigger={
                        <button className={styles.button} onClick={() => {setShowAll(!showAll)}}>
                            comment<span>{showAll ? '閉じる' : '表示する'}</span>
                        </button>
                    }
                    child={
                        <ul className={styles.ul}>
                            {selectedSkillsData.map((item, index) => (
                                <li
                                    key={index}
                                    style={{
                                        color: showAll ? '#ccc' : '#000',
                                        paddingTop: item.ptop,
                                        paddingLeft: item.pleft,
                                        paddingRight: item.pright,
                                        marginBottom: item.mbottom,
                                        marginTop: item.mtop,
                                        marginLeft: item.mleft,
                                        animationDelay: `${index * 0.2}s`,
                                        zIndex: index * -1,/* 浮かせる */
                                        left: item.ileft,
                                    }}
                                    className={styles.tooltip}
                                >
                                    <Tooltip
                                        showAll={showAll}
                                        top={item.top}
                                        left={item.left}
                                        text={
                                            <div className={styles.tooltip_box}>
                                                <p>学習期間: {item.time}ヶ月</p>
                                                <p>{item.text}</p>
                                            </div>
                                        }
                                    >
                                        <p className={styles.item}>{item.title}</p>
                                    </Tooltip>
                                </li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </section>
    );
};

export default Skills;
