import { Spin } from 'antd'
import { useEffect, useState } from 'react'
import styles from '../../../styles/Home.module.css'
import { usePlayer } from '../../contexts/PlayerContext'
import { DictionaryCache } from '../../data/models/dictionary-cache'
import { DictionaryPhoneticModel } from '../../data/models/dictionary-phonetic'
import cacheStructure from '../../mocks/cache-structure.json'
import DictionaryMeanings from '../DictionaryMeanings/DictionaryMeanings'
import DictionaryPhonetic from '../DictionaryPhonetic/DictionaryPhonetic'
import DictionaryPlayer from '../DictionaryPlayer/DictionaryPlayer'

const mockCacheStructure: DictionaryCache = cacheStructure

export default function Dictionary() {
  const { selectedWord } = usePlayer()
  const [phoneticData, setPhoneticData] = useState<DictionaryPhoneticModel>({
    word: '',
    isFavorite: false,
    textPhonetics: [],
  })
  const [audio, setAudio] = useState<string>('')
  const [definitions, setDefinitions] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const meaningDefinitions = mockCacheStructure.hello.definitionMeanings

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      const wordCached = mockCacheStructure[selectedWord]
      setPhoneticData({
        word: wordCached.word,
        isFavorite: wordCached.isFavorite,
        textPhonetics: wordCached.textPhonetics,
      })
      setAudio(wordCached.firstAudio)
      setDefinitions(wordCached.definitionMeanings)

      setLoading(false)
    }, 300)
  }, [selectedWord])

  return (
    <section className={styles['container-wrapper']}>
      <Spin spinning={loading}>
        <header>
          <DictionaryPhonetic phoneticData={phoneticData} />
        </header>
        <main>
          <DictionaryPlayer audio={audio} />
        </main>
        <footer>
          <DictionaryMeanings definitions={definitions} />
        </footer>
      </Spin>
    </section>
  )
}
