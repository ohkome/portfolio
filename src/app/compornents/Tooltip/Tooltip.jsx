import React, { Children, useState } from 'react';
import styles from './Tooltip.module.css';

const Tooltip = (props) => {
    const [show, setShow] = useState(false);

    // const commentShow = () => {
    //     setShow(true);
    // };

    // const commentOff = () => {
    //     setShow(false);
    // };
    const position = {
        '--top': props.top,
        '--left': props.left,
        '--transform': props.transform
    }

    return (
    <div
    className={styles.container} 
    onMouseEnter={() => setShow(true)} 
    onMouseLeave={() => setShow(false)} 
    onClick = {() => setShow(!show)}
    style={{ position: 'relative' }} 
    >
    {/* 子要素props.childrenをホバーした時setShowが実行 */}
    {props.children}
    {/* props.textはホバー時に表示したい内容を記載 ver1 */}
    {/* {show && <div className={styles.text} style={position}>{props.text}</div>} */}
    {/* ツールチップの表示条件を制御 ver2 */}
    {show || props.showAll ? <div className={styles.text} style={position}>{props.text}</div> : null}
    </div>
    );
};

export default Tooltip