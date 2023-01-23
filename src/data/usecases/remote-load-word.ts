import { LoadEnglishWordModel } from '../../domain/models'
import { LoadEnglishWord } from '../../domain/usecases'
import { DictionaryCache } from '../models/dictionary-cache'
import { HttpGetClient } from '../protocols'

export class RemoteLoadWord implements LoadEnglishWord {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<LoadEnglishWordModel[]>
  ) {}

  async requestWord(): Promise<void> {
    const httpResponse = await this.httpGetClient.get(this.url)

    const dictionary = httpResponse.body || []
    if (httpResponse.statusCode === 200) {
      const wordDictionary = dictionary[0]
      const word = wordDictionary.word
      const normalized: DictionaryCache = {}
      //  Needs to create an object
      // Object.assign(normalized[word], {
      //   word,
      //   isFavorite: false,
      // })

      return console.log(normalized)
    }

    // return httpResponse.body
  }
}
