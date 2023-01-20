import { Col, Row } from 'antd'
import words from '../../../word-list.json'
import styles from './styles.module.scss'

export default function WordList() {
  console.log(Object.keys(words).indexOf('abasgi'))

  const onClickWord = (element: any) => {
    console.log('element', element)
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
