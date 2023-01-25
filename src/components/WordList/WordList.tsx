import { Col, Row, Spin } from 'antd'
import { useEffect, useRef, useState } from 'react'
import styles from '../../../styles/grid-list/styles.module.scss'
import words from '../../../word-list.json'

type Props = {
  onClickWord: (word: string) => void
}

export default function WordList(props: Props) {
  const { onClickWord } = props
  const [wordList, setWordList] = useState({})
  const lastElementIteratedRef = useRef<number>(0)
  const isListFinishedRef = useRef<boolean>(false)

  function getElements() {
    const wordKeys = Object.keys(words)
    const obj: { [key: string]: number } = wordList

    if (wordKeys[lastElementIteratedRef.current]) {
      for (let index = 0; index < 50; index++) {
        const element = wordKeys[lastElementIteratedRef.current + index]
        obj[element] = 1
      }
    } else {
      isListFinishedRef.current = true
    }
    setTimeout(() => {
      lastElementIteratedRef.current = Object.keys(obj).length
      setWordList({ ...obj })
    }, 300)
  }

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        getElements()
      }
    })
    const element = document.querySelector('#load-items')
    if (element) {
      intersectionObserver.observe(element)
    }

    return () => intersectionObserver.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Row>
      {Object.keys(wordList).map((element) => {
        return (
          <Col className='gutter-row' span={6} key={element}>
            <div
              className={styles['gutter-box']}
              onClick={() => onClickWord(element)}
            >
              {element}
            </div>
          </Col>
        )
      })}
      <Row id='load-items' className={styles['load-items']} justify='center'>
        {!isListFinishedRef.current ? <Spin /> : 'The list has ended'}
      </Row>
    </Row>
  )
}
