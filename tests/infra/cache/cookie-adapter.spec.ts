import Cookies from 'js-cookie'
import { CookieAdapter } from '../../../src/infra/cache/cookie-adapter'
import { mockHistory } from '../mocks'

jest.mock('js-cookie')

const mockCookies = (): jest.Mocked<typeof Cookies> => {
  const mockedCookies = Cookies as jest.Mocked<typeof Cookies>
  mockedCookies.set.mockClear()('history', JSON.stringify(mockHistory()))
  return mockedCookies
}

type SutTypes = {
  sut: CookieAdapter
  mockedAxios: jest.Mocked<typeof Cookies>
}

// class CookieAdapterSpy implements GetCookie, SetCookie {
//   key?: string
//   value?: object

//   get(key: string): void {
//     this.key = key
//     return
//   }
//   set(key: string, value: object): void {
//     this.key = key
//     this.value = value
//     return
//   }
// }

const makeSut = (): SutTypes => {
  const sut = new CookieAdapter()
  const mockedAxios = mockCookies()
  return {
    sut,
    mockedAxios,
  }
}

beforeEach(() => {
  Cookies.remove('history')
})

test('Should call CookieAdapter set method with correct values', () => {
  const { sut } = makeSut()
  const setSpy = jest.spyOn(sut, 'set')
  const key = 'history'
  const value = mockHistory()

  sut.set(key, value)

  expect(setSpy).toHaveBeenCalledWith(key, value)
})

test('Should call CookieAdapter get method with correct value', () => {
  const { sut } = makeSut()
  const getSpy = jest.spyOn(sut, 'get')
  const key = 'history'

  sut.get(key)

  expect(getSpy).toHaveBeenCalledWith(key)
})
