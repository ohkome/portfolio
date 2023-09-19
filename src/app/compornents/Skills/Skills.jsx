import React from 'react'
import styles from './Skills.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'

const Skills = () => {
    const skills = () => {
        
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
            <p className={styles.text}>
            少しずつできることを増やし、<br/>
            簡単なデザイン、コーディングを行えるようになりました。<br/>
            現在は更なるスキルアップに向けてJavascriptをベースに学習を進めています。<br/>
            今後はアプリ作成などにも取り組み、より言語への理解を深めていきたいです。
            </p>


        </section>
    )
}

export default Skills