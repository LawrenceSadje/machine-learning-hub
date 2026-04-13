import Link from 'next/link'
import styles from '../styles/Home.module.css'  // import the CSS module

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Machine Learning Hub</h1>
        <p className={styles.description}>
          Explore machine learning concepts, build projects, and learn AI easily.
        </p>
        <Link href="/login">
          <button className={styles.button}>Get Started</button>
        </Link>
      </div>
    </div>
  )
}