import Cookies from 'js-cookie'
import { GetCookie, SetCookie } from '../../data/protocols/cache'
import { RemoveCookie } from '../../data/protocols/cache/remote-cookie'

export class CookieAdapter implements GetCookie, SetCookie, RemoveCookie {
  get(key: string): string | undefined {
    return Cookies.get(key)
  }
  set(key: string, value: object): void {
    if (value) {
      Cookies.set(key, JSON.stringify(value), { expires: 7 })
    }
  }

  remove(key: string): void {
    return Cookies.remove(key)
  }
}
