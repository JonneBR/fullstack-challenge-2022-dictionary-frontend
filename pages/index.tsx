import Head from 'next/head'
import Dictionary from '../src/components/Dictionary/Dictionary'
import Tab from '../src/components/Tab/Tab'
import { PlayerContextProvider } from '../src/contexts/PlayerContext'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend | Dictionary APP</title>
        <meta
          name='description'
          content='Dictionary API Challenge by Coodesh'
        />
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
