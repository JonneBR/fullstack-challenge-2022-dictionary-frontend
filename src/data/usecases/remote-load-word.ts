import { LoadEnglishWordModel } from '../../domain/models'
import { LoadEnglishWord } from '../../domain/usecases'
import { DictionaryCache } from '../models/dictionary-cache'
import { HttpGetClient } from '../protocols'

interface Phonetics {
  textPhonetics: string[]
  firstAudio: string
}
export class RemoteLoadWord implements LoadEnglishWord {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<LoadEnglishWordModel[]>
  ) {}

  async requestWord(): Promise<DictionaryCache> {
    const httpResponse = await this.httpGetClient.get(this.url)

    const dictionary = httpResponse.body || []
    if (httpResponse.statusCode === 200) {
      const firstOccurence = dictionary[0]
      const phoneticsReduced = firstOccurence.phonetics.reduce<Phonetics>(
        (acc: Phonetics, curr) => {
          if (curr.text) acc['textPhonetics'].push(curr.text)
          if (curr.text) acc['firstAudio'] = curr.audio || ''
          return acc
        },
        {
          textPhonetics: [],
          firstAudio: '',
        }
      )
      const meaningsReduced = firstOccurence.meanings.reduce<string[]>(
        (acc, curr) => {
          acc.push(`${curr.partOfSpeech} - ${curr.definitions[0].definition}`)
          return acc
        },
        []
      )
      const word = firstOccurence.word
      const isFavorite = false
      const textPhonetics = phoneticsReduced.textPhonetics
      const firstAudio = phoneticsReduced.firstAudio
      const definitionMeanings = meaningsReduced

      const normalized: DictionaryCache = {
        [word]: {
          word,
          isFavorite,
          textPhonetics,
          firstAudio,
          definitionMeanings,
        },
      }

      return normalized
    }

    return {}
  }
}
