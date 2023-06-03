import Image from 'next/image'
import styles from './page.module.css'
import { sriracha, merriweather } from './layout.js';

export default function Home() {
  return (
    <html className={[sriracha.variable, merriweather.variable].join(" ")}>
      <h1 className={styles.test}>test</h1>
    </html>
  )
}
