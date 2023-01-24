import { DictionaryCache } from '../../data/models/dictionary-cache'

export interface LoadEnglishWord {
  requestWord: () => Promise<DictionaryCache>
}

// export namespace LoadPlanets {
//   export type Model = LoadPlanetsModel
// }
