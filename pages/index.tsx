// import { Inter } from '@next/font/google'
import axios from 'axios'
import Head from 'next/head'
import { useEffect } from 'react'
import Dictionary from '../src/components/Dictionary/Dictionary'
import Tab from '../src/components/Tab/Tab'
import { PlayerContextProvider } from '../src/contexts/PlayerContext'
import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const fetchData = async () => {
    return await axios('http://localhost:3000/api/hello')
  }
  useEffect(() => {
    fetchData().then((response) => console.log(response))
  }, [])

  return (
    <>
      <Head>
        <title>Frontend | Dictionary APP</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PlayerContextProvider>
        <main className={styles.main}>
          <div className={styles['dictionary-container']}>
            <Dictionary />
          </div>
          <div className={styles['tab-container']}>
            <Tab />
          </div>
        </main>
      </PlayerContextProvider>
    </>
  )
}
