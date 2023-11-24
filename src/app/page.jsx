"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState,useEffect } from 'react';
import Welcomepage from '../components/homepage';

export default function Home() {
  const [ismounted, setIsmounted] = useState(false);
  useEffect(() => {
    setIsmounted(true);
  }, []);
  if (!ismounted) {
    return null;
  }
  return (
    <main className={styles.main}>
      <Welcomepage/>
    </main>
  )
}
