import { Col, Row } from 'antd'
import styles from '../../../styles/grid-list/styles.module.scss'
import words from '../../../word-list.json'
import { usePlayer } from '../../contexts/PlayerContext'

export default function WordList() {
  // console.log(Object.keys(words).indexOf('abasgi'))

  const { setWord } = usePlayer()

  const onClickWord = (word: string) => {
    setWord(word)
  }

  return (
    <Row>
      {Object.keys(words).map((element) => {
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

      {/* <Col className='gutter-row' span={6}>
                        <div className={styles['gutter-box']}>Box</div>
                      </Col>
                      <Col className='gutter-row' span={6}>
                        <div className={styles['gutter-box']}>Word</div>
                      </Col>
                      <Col className='gutter-row' span={6}>
                        <div className={styles['gutter-box']}>Programming</div>
                      </Col> */}
    </Row>
  )
}
