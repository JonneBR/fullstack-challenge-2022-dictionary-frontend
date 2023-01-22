import styles from '../../../styles/Home.module.css'
import cacheStructure from '../../mocks/cache-structure.json'
import DictionaryMeanings from '../DictionaryMeanings/DictionaryMeanings'
import DictionaryPhonetic from '../DictionaryPhonetic/DictionaryPhonetic'
import DictionaryPlayer from '../DictionaryPlayer/DictionaryPlayer'

const mockCacheStructure = cacheStructure

export default function Dictionary() {
  const dictionaryData = {
    word: mockCacheStructure.hello.word,
    isFavorite: mockCacheStructure.hello.isFavorite,
    textPhonetics: mockCacheStructure.hello.textPhonetics,
  }

  const playerAudio = mockCacheStructure.hello.firstAudio

  const meaningDefinitions = mockCacheStructure.hello.definitionMeanings
  return (
    <section className={styles['container-wrapper']}>
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
