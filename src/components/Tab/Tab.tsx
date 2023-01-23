import {
  HistoryOutlined,
  StarOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Badge, Tabs } from 'antd'
import cacheStructure from '../../../src/mocks/cache-structure.json'
import cacheFavorites from '../../../src/mocks/favorite-words.json'
import { usePlayer } from '../../contexts/PlayerContext'
import { DictionaryCache } from '../../data/models/dictionary-cache'
import { makeRemoteLoadWord } from '../../main/factories/usecases/remote-load-word-factory'
import CachedList from '../CachedList/CachedList'
import WordList from '../WordList/WordList'

export default function Tab() {
  const { setWord } = usePlayer()

  const cachedWords: DictionaryCache = cacheStructure
  const favoriteWords: DictionaryCache = cacheFavorites

  const onClickWord = async (word: string) => {
    await makeRemoteLoadWord(word).requestWord()
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
          children: <WordList />,
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
            <CachedList words={cachedWords} onClickWord={onClickWord} />
          ),
        },
      ]}
    />
  )
}
