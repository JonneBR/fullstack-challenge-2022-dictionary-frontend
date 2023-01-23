import { PhoneticsModel } from '../../domain/models'

export interface DictionaryCache {
  [key: string]: {
    word: string
    photenic?: string
    isFavorite: boolean
    textPhonetics: string[]
    firstAudio: string
    definitionMeanings: string[]
    phonetics?: PhoneticsModel[]
  }
}
