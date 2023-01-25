import { createContext, ReactNode, useContext, useState } from 'react'
import { DictionaryCache } from '../data/models/dictionary-cache'
import { makeCookieAdapter } from '../main/factories/cache'

type PlayerContextData = {
  currentWord: string
  setWord: (word: string) => void
  getCachedWords: () => DictionaryCache | undefined
  setCachedWord: (word: DictionaryCache) => void
  setCachedWordFavorite: (word: string) => void
  getFavoriteWords: () => DictionaryCache | undefined
  nextWord: () => void
  previousWord: () => void
  favoriteWordsQuantity: number
}

export const PlayerContext = createContext({} as PlayerContextData)

type PlayerContextProviderProps = {
  children: ReactNode
}

export function PlayerContextProvider({
  children,
}: PlayerContextProviderProps) {
  const [currentWord, setCurrentWord] = useState<string>('hello')
  const [favoriteWords, setFavoriteWords] = useState<{ [key: string]: number }>(
    {}
  )
  const favoriteWordsQuantity: number = Object.keys(favoriteWords).length
  const cookie = makeCookieAdapter()

  function setWord(word: string) {
    setCurrentWord(word)
  }

  function getCachedWords(): DictionaryCache | undefined {
    const cache = cookie.get('cache-words')
    if (cache) return JSON.parse(cache)
    return undefined
  }

  function getFavoriteWords(): DictionaryCache | undefined {
    const favorites = cookie.get('favorite-words')
    if (favorites) return JSON.parse(favorites)
    return undefined
  }

  function setCachedWordFavorite(word: string) {
    const cookie = makeCookieAdapter()
    const cache = cookie.get('cache-words')
    const favorite = cookie.get('favorite-words')
    const obj = favoriteWords
    if (cache) {
      const words: DictionaryCache = JSON.parse(cache)
      words[word].isFavorite = !words[word].isFavorite
      setCachedWord({ [word]: words[word] })

      if (favorite) {
        const favorites: DictionaryCache = JSON.parse(favorite)

        if (words[word].isFavorite) {
          favorites[word] = words[word]
          obj[word] = 1
          setFavoriteWords({ ...obj })
          cookie.set('favorite-words', favorites)
        } else {
          delete favorites[word]
          delete obj[word]
          setFavoriteWords({ ...obj })
          cookie.set('favorite-words', favorites)
        }
      } else {
        obj[word] = 1
        setFavoriteWords({ ...obj })
        cookie.set('favorite-words', { [word]: words[word] })
      }
    }
  }

  function setCachedWord(word: DictionaryCache) {
    const cache = cookie.get('cache-words')
    const key = Object.keys(word)[0]
    if (cache) {
      const words = JSON.parse(cache)
      words[key] = word[key]
      cookie.set('cache-words', words)
    } else {
      cookie.set('cache-words', word)
    }
  }

  function nextWord() {
    const cache = getCachedWords()
    if (cache) {
      const keysArr = Object.keys(cache)
      const indexCurrent = keysArr.indexOf(currentWord)
      const nextWord = keysArr[indexCurrent + 1]
      if (nextWord) return setWord(keysArr[indexCurrent + 1])
      return setWord(keysArr[0])
    }
  }

  function previousWord() {
    const cache = getCachedWords()
    if (cache) {
      const keysArr = Object.keys(cache)
      const indexCurrent = keysArr.indexOf(currentWord)
      const previousWord = keysArr[indexCurrent - 1]

      if (previousWord) return setWord(keysArr[indexCurrent - 1])
      return setWord(keysArr[keysArr.length - 1])
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        currentWord,
        setWord,
        getCachedWords,
        setCachedWord,
        setCachedWordFavorite,
        getFavoriteWords,
        nextWord,
        previousWord,
        favoriteWordsQuantity,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  return useContext(PlayerContext)
}
