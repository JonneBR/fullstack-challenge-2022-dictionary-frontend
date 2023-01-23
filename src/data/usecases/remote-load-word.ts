import { LoadEnglishWord } from '../../domain/usecases'
import { HttpGetClient } from '../protocols'

export class RemoteLoadWord implements LoadEnglishWord {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<void>
  ) {}

  async requestWord(): Promise<void> {
    const httpResponse = await this.httpGetClient.get(this.url)

    return httpResponse.body
  }
}
