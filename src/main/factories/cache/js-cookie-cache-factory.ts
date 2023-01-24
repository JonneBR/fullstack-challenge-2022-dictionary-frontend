import { CookieAdapter } from '../../../infra/cache/cookie-adapter'

export const makeCookieAdapter = (): CookieAdapter => new CookieAdapter()
