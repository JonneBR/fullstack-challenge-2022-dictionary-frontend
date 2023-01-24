import {
  HistoryOutlined,
  StarOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Badge, Tabs } from 'antd'
import { usePlayer } from '../../contexts/PlayerContext'
import CachedList from '../CachedList/CachedList'
import WordList from '../WordList/WordList'

export default function Tab() {
  const { setWord, getCachedWords, getFavoriteWords } = usePlayer()
  // const favoriteWords: DictionaryCache = cacheStructure

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
            <CachedList words={getFavoriteWords()} onClickWord={onClickWord} />
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
