import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Insert from "./insert"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Insert/>

        {/* addind grid system */ }
      
    </div>
  )
}
