import { RemoteLoadWord } from '../../../data/usecases'
import { makeApiUrl, makeAxiosHttpGet } from '../http'

export const makeRemoteLoadWord = (url: string): RemoteLoadWord =>
  new RemoteLoadWord(makeApiUrl(url), makeAxiosHttpGet())
