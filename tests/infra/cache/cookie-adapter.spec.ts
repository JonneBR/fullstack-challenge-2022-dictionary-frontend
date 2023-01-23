import { CookieAdapter } from '../../../src/infra/cache/cookie-adapter'

const makeSut = (): CookieAdapter => new CookieAdapter()

test('Should sucess', () => {
  const sut = makeSut()
  expect(1).toBe(1)
})
