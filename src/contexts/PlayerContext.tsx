import { createContext, ReactNode, useContext, useState } from 'react'

// type PlayerContextData = {
//   wordList: string[]
//   currentWordIndex: number
//   isPlaying: boolean
//   play: (word: string) => void
//   playNext: () => void
//   playPrevious: () => void
//   playList: (list: string[], index: number) => void
//   togglePlay: () => void
//   clearPlayerState: () => void
//   hasNext: boolean
//   hasPrevious: boolean
//   setPlayingState: (state: boolean) => void
// }

type PlayerContextData = {
  currentWord: string
  setWord: (word: string) => void
}

export const PlayerContext = createContext({} as PlayerContextData)

type PlayerContextProviderProps = {
  children: ReactNode
}

export function PlayerContextProvider({
  children,
}: PlayerContextProviderProps) {
  const [currentWord, setCurrentWord] = useState<string>('hello')

  function setWord(word: string) {
    setCurrentWord(word)
  }

  return (
    <PlayerContext.Provider value={{ currentWord, setWord }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  return useContext(PlayerContext)
}
