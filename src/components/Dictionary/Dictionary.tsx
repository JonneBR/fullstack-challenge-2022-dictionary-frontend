import { useEffect } from 'react'
import styles from '../../../styles/Home.module.css'
import { usePlayer } from '../../contexts/PlayerContext'
import cacheStructure from '../../mocks/cache-structure.json'
import DictionaryMeanings from '../DictionaryMeanings/DictionaryMeanings'
import DictionaryPhonetic from '../DictionaryPhonetic/DictionaryPhonetic'
import DictionaryPlayer from '../DictionaryPlayer/DictionaryPlayer'

const mockCacheStructure = cacheStructure

export default function Dictionary() {
  const { selectedWord } = usePlayer()

  const dictionaryData = {
    word: mockCacheStructure.hello.word,
    isFavorite: mockCacheStructure.hello.isFavorite,
    textPhonetics: mockCacheStructure.hello.textPhonetics,
  }

  const playerAudio = mockCacheStructure.hello.firstAudio

  const meaningDefinitions = mockCacheStructure.hello.definitionMeanings

  const mockWord = 'hello'
  useEffect(() => {
    const wordCached = mockCacheStructure[mockWord]
    console.log(wordCached)
  }, [selectedWord])

  return (
    <section className={styles['container-wrapper']}>
      {selectedWord}
      <header>
        <DictionaryPhonetic props={dictionaryData} />
      </header>
      <main>
        <DictionaryPlayer audio={playerAudio} />
      </main>
      <footer>
        <DictionaryMeanings definitions={meaningDefinitions} />
      </footer>
    </section>
  )
}
