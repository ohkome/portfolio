"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../Works/Works.module.css'
// コンポーネント
import SectionTitle from '../compornents/SectionTitle/SectionTitle'
import BackgroundSlider from '../compornents/BackgroundSlider/BackgroundSlider'
import Filter from '../compornents/Filter/Filter'
const page = () => {

  return (
    <div className={styles.topWorks}>
      <Filter />
    </div>
  );

}

export default page