export interface DictionaryCache {
  word: string
  isFavorite: boolean
  phonetics: PhoneticsCache[]
  meanings: MeaningsCache[]
  license: LicenseCache
  sourceUrls: string[]
}

export interface PhoneticsCache {
  text?: string
  audio?: string
  sourceUrl?: string
  license?: LicenseCache
}

export interface LicenseCache {
  license: {
    name: string
    url: string
  }
}

export interface MeaningsCache {
  partOfSpeech: string
  definitions: [
    {
      definition: string
      synonyms: []
      antonyms: []
    }
  ]
  synonyms: string[]
  antonyms: []
}
