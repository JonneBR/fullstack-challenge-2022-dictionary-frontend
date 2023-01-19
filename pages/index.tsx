import {
  LeftOutlined,
  RightOutlined,
  StepForwardOutlined,
} from '@ant-design/icons'
import { Inter } from '@next/font/google'
import axios from 'axios'
import Head from 'next/head'
import { useEffect } from 'react'
import Tab from '../src/components/tab/Tab'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

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
      <main className={styles.main}>
        <div className={styles['dictionary-container']}>
          <div className={styles['container-wrapper']}>
            <div className={styles['container-word-phonetic']}>
              <h2>hello</h2>
              <h3
                style={{
                  fontWeight: 'normal',
                }}
              >
                həˈləʊ
              </h3>
            </div>
            <div className={styles['container-icons-player']}>
              {/* <StarTwoTone style={{ fontSize: '2rem' }} /> */}
              {/* <PauseOutlined style={{ fontSize: '2rem' }} /> */}
              <LeftOutlined style={{ fontSize: '2rem' }} />
              <StepForwardOutlined style={{ fontSize: '2rem' }} />
              <RightOutlined style={{ fontSize: '2rem' }} />
              {/* <StarOutlined style={{ fontSize: '2rem' }} /> */}
            </div>
            <div className={styles['container-word-meanings']}>
              <br />
              <br />
              <br />
              <br />
              <h1>Meanings</h1>
              <p>Verb - Hello! or an equivalente greeting</p>
            </div>
          </div>
        </div>
        <div className={styles['tab-container']}>
          <Tab />
        </div>
        {/* <div className={styles.description}> */}

        {/* <div>
            <a
              href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              By{' '}
              <Image
                src='/vercel.svg'
                alt='Vercel Logo'
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div> */}
        {/* </div> */}

        {/* <div className={styles.center}>
          <Image
            className={styles.logo}
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src='/thirteen.svg'
              alt='13'
              width={40}
              height={31}
              priority
            />
          </div>
        </div> */}

        {/* <div className={styles.grid}>
          <a
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </>
  )
}
