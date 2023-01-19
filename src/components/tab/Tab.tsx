import {
  HistoryOutlined,
  StarOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Col, Row, Tabs, Typography } from 'antd'
import styles from './Tab.module.css'

const { Title, Text } = Typography

export default function Tab() {
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
          children: [1].map((element) => {
            return (
              <div key={element}>
                <Row gutter={[16, 24]}>
                  <Col className='gutter-row' span={6}>
                    <div className={styles['gutter-box']}>Airplane</div>
                  </Col>
                  <Col className='gutter-row' span={6}>
                    <div className={styles['gutter-box']}>Box</div>
                  </Col>
                  <Col className='gutter-row' span={6}>
                    <div className={styles['gutter-box']}>Word</div>
                  </Col>
                  <Col className='gutter-row' span={6}>
                    <div className={styles['gutter-box']}>Programming</div>
                  </Col>
                </Row>
                <Row gutter={[16, 24]}>
                  <Col className='gutter-row' span={6}>
                    <div className={styles['gutter-box']}>Airplane</div>
                  </Col>
                  <Col className='gutter-row' span={6}>
                    <div className={styles['gutter-box']}>Box</div>
                  </Col>
                  <Col className='gutter-row' span={6}>
                    <div className={styles['gutter-box']}>Word</div>
                  </Col>
                  <Col className='gutter-row' span={6}>
                    <div className={styles['gutter-box']}>Programming</div>
                  </Col>
                </Row>
              </div>
            )
          }),
        },
        {
          label: (
            <span>
              <StarOutlined />
              Favorites
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
