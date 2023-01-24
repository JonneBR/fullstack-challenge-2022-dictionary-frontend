import {
  HistoryOutlined,
  StarOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Badge, Tabs } from 'antd'
import { useEffect, useState } from 'react'
import cacheStructure from '../../../src/mocks/cache-structure.json'
import { usePlayer } from '../../contexts/PlayerContext'
import { DictionaryCache } from '../../data/models/dictionary-cache'
import CachedList from '../CachedList/CachedList'
import WordList from '../WordList/WordList'

export default function Tab() {
  const { currentWord, setWord, getCachedWords } = usePlayer()
  const [cachedWords, setCachedWords] = useState<DictionaryCache | object>({})
  // const cachedWords: DictionaryCache | object = getCachedWords()
  const favoriteWords: DictionaryCache = cacheStructure

  useEffect(() => {
    setCachedWords(getCachedWords())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWord])

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
            <CachedList words={cachedWords} onClickWord={onClickWord} />
          ),
        },
      ]}
    />
  )
}
