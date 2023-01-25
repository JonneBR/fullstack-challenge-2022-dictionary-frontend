import { notification, Spin } from 'antd'
import { useEffect, useState } from 'react'
import styles from '../../../styles/Home.module.css'
import { usePlayer } from '../../contexts/PlayerContext'
import { DictionaryCache } from '../../data/models/dictionary-cache'
import { DictionaryPhoneticModel } from '../../data/models/dictionary-phonetic'
import { makeRemoteLoadWord } from '../../main/factories/usecases/remote-load-word-factory'
import DictionaryMeanings from '../DictionaryMeanings/DictionaryMeanings'
import DictionaryPhonetic from '../DictionaryPhonetic/DictionaryPhonetic'
import DictionaryPlayer from '../DictionaryPlayer/DictionaryPlayer'

export default function Dictionary() {
  const {
    currentWord,
    getCachedWords,
    setCachedWord,
    setCachedWordFavorite,
    nextWord,
    previousWord,
    favoriteWordsQuantity,
  } = usePlayer()

  const [phoneticData, setPhoneticData] = useState<DictionaryPhoneticModel>({
    word: '',
    isFavorite: false,
    textPhonetics: [],
  })
  const [audio, setAudio] = useState<string>('')
  const [definitions, setDefinitions] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  function saveState(dictionary: DictionaryCache) {
    setPhoneticData({
      word: dictionary[currentWord].word,
      isFavorite: dictionary[currentWord].isFavorite,
      textPhonetics: dictionary[currentWord].textPhonetics,
    })
    setAudio(dictionary[currentWord].firstAudio)
    setDefinitions(dictionary[currentWord].definitionMeanings)
  }

  useEffect(() => {
    console.log('currentWord', currentWord)

    setLoading(true)
    setTimeout(async () => {
      const cache = getCachedWords()
      let dictionary: DictionaryCache = {}
      if (cache && cache[currentWord]) {
        dictionary = cache
        saveState(dictionary)
      } else {
        const response = await makeRemoteLoadWord(currentWord).requestWord()
        setCachedWord(response)
        dictionary = response
        if (Object.keys(dictionary).length > 0) {
          saveState(dictionary)
        } else {
          notification.warning({
            message: 'No Definitions Found',
            description:
              'You can try the search again at later time or head to the web instead.',
          })
        }
      }
      setLoading(false)
    }, 300)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWord, favoriteWordsQuantity])

  return (
    <section className={styles['container-wrapper']}>
      <Spin spinning={loading}>
        <header>
          <DictionaryPhonetic
            phoneticData={phoneticData}
            onFavorite={setCachedWordFavorite}
          />
        </header>
        <main>
          <DictionaryPlayer
            audio={audio}
            playNextAudio={nextWord}
            playPreviousAudio={previousWord}
          />
        </main>
        <footer>
          <DictionaryMeanings definitions={definitions} />
        </footer>
      </Spin>
    </section>
  )
}
