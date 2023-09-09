import React from 'react'
import styles from './SectionTitle.module.css'

const SectionTitle = (props) => {
  // Textの色
  const enMainColor = {
    color: props.enMainColor
  };
  const enSubColor = {
    color: props.enSubColor
  };
  const jaColor = {
    color: props.jaColor
  };
  // 装飾の色
  const boxColor = {
    '--box-color': props.boxColor
  };

  return (
    <h2 className={styles.title} style={boxColor}>
      <span className={styles.en} style={enMainColor}>
        {props.enText} 
        <span style={enSubColor}>{props.enSubText}</span>
      </span>
      <span className={styles.ja} style={jaColor}>
        {props.jaText}
      </span>
    </h2>
  )
}

export default SectionTitle 