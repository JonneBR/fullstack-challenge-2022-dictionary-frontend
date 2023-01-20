import { createContext, ReactNode } from 'react'

type PlayerContextData = {
  wordList: string[]
  currentWordIndex: number
  isPlaying: boolean
  play: (word: string) => void
  playNext: () => void
  playPrevious: () => void
  playList: (list: string[], index: number) => void
  togglePlay: () => void
  clearPlayerState: () => void
  hasNext: boolean
  hasPrevious: boolean
  setPlayingState: (state: boolean) => void
}

export const PlayerContext = createContext({} as PlayerContextData)

type PlayerContextProviderProps = {
  children: ReactNode
}
