import {
  HistoryOutlined,
  StarOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Badge, Tabs } from 'antd'
import cacheStructure from '../../../src/mocks/cache-structure.json'
import { usePlayer } from '../../contexts/PlayerContext'
import { DictionaryCache } from '../../data/models/dictionary-cache'
import CachedList from '../CachedList/CachedList'
import WordList from '../WordList/WordList'

export default function Tab() {
  const { setWord, getCachedWords } = usePlayer()
  const favoriteWords: DictionaryCache = cacheStructure

  const onClickWord = async (word: string) => {
    setWord(word)
  }
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
          children: <WordList onClickWord={onClickWord} />,
        },
        {
          label: (
            <span>
              <StarOutlined />
              <Badge dot={true}>Favorites</Badge>
            </span>
          ),
          key: '2',
          children: (
            <CachedList words={favoriteWords} onClickWord={onClickWord} />
          ),
        },
        {
          label: (
            <span>
              <HistoryOutlined />
              History
            </span>
          ),
          key: '3',
          children: (
            <CachedList words={getCachedWords()} onClickWord={onClickWord} />
          ),
        },
      ]}
    />
  )
}
