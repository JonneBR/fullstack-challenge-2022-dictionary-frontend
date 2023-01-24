import { Spin } from 'antd'
import { useEffect, useState } from 'react'
import styles from '../../../styles/Home.module.css'
import { usePlayer } from '../../contexts/PlayerContext'
import { DictionaryCache } from '../../data/models/dictionary-cache'
import { DictionaryPhoneticModel } from '../../data/models/dictionary-phonetic'
import { makeRemoteLoadWord } from '../../main/factories/usecases/remote-load-word-factory'
import cacheStructure from '../../mocks/cache-structure.json'
import DictionaryMeanings from '../DictionaryMeanings/DictionaryMeanings'
import DictionaryPhonetic from '../DictionaryPhonetic/DictionaryPhonetic'
import DictionaryPlayer from '../DictionaryPlayer/DictionaryPlayer'

const mockCacheStructure: DictionaryCache = cacheStructure

export default function Dictionary() {
  const { currentWord, getCachedWords, setCachedWord } = usePlayer()
  const [phoneticData, setPhoneticData] = useState<DictionaryPhoneticModel>({
    word: '',
    isFavorite: false,
    textPhonetics: [],
  })
  const [audio, setAudio] = useState<string>('')
  const [definitions, setDefinitions] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(async () => {
      const response = await makeRemoteLoadWord(currentWord).requestWord()
      setCachedWord(response)
      setPhoneticData({
        word: response[currentWord].word,
        isFavorite: response[currentWord].isFavorite,
        textPhonetics: response[currentWord].textPhonetics,
      })
      setAudio(response[currentWord].firstAudio)
      setDefinitions(response[currentWord].definitionMeanings)
      setLoading(false)
    }, 300)
  }, [currentWord])

  return (
    <section className={styles['container-wrapper']}>
      <Spin spinning={loading}>
        <header>
          <DictionaryPhonetic phoneticData={phoneticData} />
        </header>
        <main>
          <DictionaryPlayer audio={audio} audioData={mockCacheStructure} />
        </main>
        <footer>
          <DictionaryMeanings definitions={definitions} />
        </footer>
      </Spin>
    </section>
  )
}
