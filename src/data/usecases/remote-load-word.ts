import { LoadEnglishWord } from '../../domain/usecases'
import { HttpGetClient } from '../protocols'

export class RemoteLoadWord implements LoadEnglishWord {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async requestWord(): Promise<void> {
    const httpResponse = await this.httpGetClient.get(this.url)

    const remoteSurveys = httpResponse.body || []
    console.log('remoteSurveys', remoteSurveys)

    // return httpResponse.body
  }
}
