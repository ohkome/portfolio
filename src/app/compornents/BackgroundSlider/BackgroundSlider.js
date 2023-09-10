import React from 'react';
import Image from 'next/image';
import styles from './BackgroundSlider.module.css';

const BackgroundSlider = () => {
    return(
        <div className={styles.scroll_wrapper}>
            <div className={styles.scroll}>
                <ul className={styles.listLeft_fir}>
                    <li className={styles.item}>
                        <Image 
                        src= '/mosya.jpg'
                        alt='design'
                        className={styles.img} 
                        fill 
                        sizes='(max-width: 768px) 25%, 50%'
                        />
                    </li>
                </ul>
                <ul className={styles.listLeft_sec}>
                    <li className={styles.item}>
                        <Image 
                        src='/mosya.jpg'
                        alt='design'
                        className={styles.img} 
                        fill 
                        sizes='(max-width: 768px) 25%, 50%'
                        />
                    </li>
                </ul>
            </div>
            <div className={styles.scroll}>
                <ul className={styles.listRight_fir}>
                    <li className={styles.item}>
                        <Image 
                        src='/mosya.jpg'
                        alt='web'
                        className={styles.img} 
                        fill 
                        sizes='(max-width: 768px) 25%, 50%'
                        />
                    </li>
                </ul>
                <ul className={styles.listRight_sec}>
                    <li className={styles.item}>
                        <Image 
                        src='/mosya.jpg'
                        alt='web' 
                        className={styles.img} 
                        fill 
                        sizes='(max-width: 768px) 25%, 50%'
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BackgroundSlider