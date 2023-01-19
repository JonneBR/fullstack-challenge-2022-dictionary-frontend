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
          children: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((element) => {
            return (
              <div key={element}>
                <Row
                  justify='space-around'
                  style={{ padding: '10px 0' }}
                  className={styles['list-row']}
                  //   onClick={() => setItemsSelected('2')}
                >
                  <Col span={0.1}>
                    <Row align='middle' style={{ flexDirection: 'column' }}>
                      <Text strong>Airplane</Text>
                    </Row>
                  </Col>

                  <Col>
                    <Row align='middle' style={{ flexDirection: 'column' }}>
                      <Text strong>Verb/Noun</Text>
                    </Row>
                  </Col>

                  {/* <Col>
                    <Row align='middle' style={{ flexDirection: 'column' }}>
                      <NotificationOutlined style={{ fontSize: '1rem' }} />
                    </Row>
                  </Col> */}

                  {/* <Col>
                    <Row
                      align='middle'
                      style={{ flexDirection: 'column', fontSize: '1rem' }}
                    >
                      <StarOutlined />
                    </Row>
                  </Col> */}
                  {/* <Col span={16}>
              <Row justify='space-between'>
                <Title level={5} underline>
                  {'element.usuario'}
                </Title>
                <Row justify='space-around'>
                  <Row align='middle' style={{ flexDirection: 'column' }}>
                    <Text strong>
                      longDateThreeLetterMonth
                    </Text>
                    <Text strong>
                      hourMinuteSecond
                    </Text>
                  </Row>
                </Row>
              </Row>
              <Row>{'<Progress percent={100} />'}</Row>
            </Col> */}
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
