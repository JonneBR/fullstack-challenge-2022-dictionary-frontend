import {
  HistoryOutlined,
  StarOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Tabs } from 'antd'

export default function Tab() {
  return (
    <Tabs
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
          children: 'Words',
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
