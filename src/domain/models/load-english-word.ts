export interface LoadEnglishWordModel {
  word: string
  photenic?: string
  phonetics: PhoneticsModel[]
  meanings: MeaningsModel[]
  license?: LicenseModel
  sourceUrls: string[]
}

export interface PhoneticsModel {
  text?: string
  audio?: string
  sourceUrl?: string
  license?: LicenseModel
}

export interface LicenseModel {
  name: string
  url: string
}

export interface MeaningsModel {
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
  antonyms: string[]
}
