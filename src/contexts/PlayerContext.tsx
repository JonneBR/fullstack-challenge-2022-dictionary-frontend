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
  selectedWord: string
  setWord: (word: string) => void
}

export const PlayerContext = createContext({} as PlayerContextData)

type PlayerContextProviderProps = {
  children: ReactNode
}

export function PlayerContextProvider({
  children,
}: PlayerContextProviderProps) {
  const [selectedWord, setSelectedWord] = useState<string>('')

  function setWord(word: string) {
    setSelectedWord(word)
  }

  return (
    <PlayerContext.Provider value={{ selectedWord, setWord }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  return useContext(PlayerContext)
}
