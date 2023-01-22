import { Col, Row } from 'antd'
import styles from '../../../styles/grid-list/styles.module.scss'
import { DictionaryCache } from '../../data/models/dictionary-cache'

type Props = {
  words: DictionaryCache
}

export default function CachedList(props: Props) {
  const { words } = props
  return (
    <Row>
      {Object.keys(words).map((element) => {
        return (
          <Col className='gutter-row' span={6} key={element}>
            <div
              className={styles['gutter-box']}
              //   onClick={() => onClickWord(element)}
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
