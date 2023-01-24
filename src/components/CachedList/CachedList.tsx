/* eslint-disable indent */
import { Col, Row } from 'antd'
import styles from '../../../styles/grid-list/styles.module.scss'
import { DictionaryCache } from '../../data/models/dictionary-cache'

type Props = {
  words: DictionaryCache | undefined
  onClickWord: (word: string) => void
}

export default function CachedList(props: Props) {
  const { words, onClickWord } = props

  const onSelect = (word: string) => {
    onClickWord(word)
  }

  console.log('words', words)

  return (
    <Row>
      {words
        ? Object.keys(words).map((element) => {
            return (
              <Col className='gutter-row' span={6} key={element}>
                <div
                  className={styles['gutter-box']}
                  onClick={() => onSelect(element)}
                >
                  {element}
                </div>
              </Col>
            )
          })
        : 'Nothing found :('}
    </Row>
  )
}
