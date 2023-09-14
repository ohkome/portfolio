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
    >
    {props.children}
    {show && <p className={styles.text} style={position}>{props.text}</p>}
    </div>
    );
};

export default Tooltip