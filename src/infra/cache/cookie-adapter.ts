import { GetCookie, SetCookie } from '../../data/protocols/cache'

export class CookieAdapter implements GetCookie, SetCookie {
  get(key: string): void {
    return
  }
  set(key: string, value: object): void {
    return
  }
}
