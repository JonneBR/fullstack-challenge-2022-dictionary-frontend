import {
  HistoryOutlined,
  StarOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Badge, Col, Row, Tabs } from 'antd'
import words from '../../../word-list.json'
import styles from './Tab.module.css'

export default function Tab() {
  console.log(Object.keys(words).indexOf('abasgi'))
  return (
    <Tabs
      style={{ width: '100%' }}
      defaultActiveKey='1'
      items={[
        {
          label: (
            <span>
              <UnorderedListOutlined />
              Words
            </span>
          ),
          key: '1',
          children: (
            <>
              <Row>
                {Object.keys(words).map((element) => {
                  return (
                    <Col className='gutter-row' span={6} key={element}>
                      <div className={styles['gutter-box']}>{element}</div>
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
            </>
          ),
        },
        {
          label: (
            <span>
              <StarOutlined />
              <Badge dot={true}>Favorites</Badge>
            </span>
          ),
          key: '2',
          children: 'Favotires',
        },
        {
          label: (
            <span>
              <HistoryOutlined />
              History
            </span>
          ),
          key: '3',
          children: 'History',
        },
      ]}
    />
  )
}
