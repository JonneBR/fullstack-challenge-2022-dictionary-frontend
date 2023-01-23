export interface DictionaryCache {
  [key: string]: {
    word: string
    photenic?: string
    isFavorite: boolean
    textPhonetics: string[]
    firstAudio: string
    definitionMeanings: string[]
    phonetics?: PhoneticsCache[]
  }
}

export interface PhoneticsCache {
  text?: string
  audio?: string
  sourceUrl?: string
  license?: LicenseCache
}

export interface LicenseCache {
  name: string
  url: string
}

export interface MeaningsCache {
  partOfSpeech: string
  definitions: [
    {
      definition: string
      synonyms: []
      antonyms: []
      example?: string
    }
  ]
  synonyms: string[]
  antonyms: []
}
