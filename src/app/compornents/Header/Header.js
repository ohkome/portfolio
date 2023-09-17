import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const navigationMenu = [
    {
    href: "/",
    label: "Home",
    },
    {
    href: "/About",
    label: "About",
    },
    {
    href: "/Works",
    label: "Works",
    }
]

const Header = () => {
    return (


        <header className={styles.header}>
            {/* svg-logo */}
            <h1 className={styles.h1}>
                <Link href="/" className={styles.link} >
                    <Image 
                    src='/logo.svg' 
                    alt="mk" 
                    priority={false}
                    width={100}
                    height={50}
                    className={styles.logo}
                    //mousehoverのアクションと、ページを開いている時の表示の仕方の違いについて記載
                    //onMouseEnter={() => setMenu(true)}//ホバー時
                    //onMouseLeave={() => setMenu(false)}//ホバーじゃない時
                    />
                </Link>
            </h1>
            
            {/* navigationMenu */}
            <nav className={styles.nav}>
                <ul className={styles.nav_flex}>
                    {navigationMenu.map((item)=>{
                        return(
                        <li key={item.label} className={styles.item}>
                            <Link 
                            href={item.href} 
                            className={styles.link}>
                            {item.label}
                            </Link>
                        </li>
                    );
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Header