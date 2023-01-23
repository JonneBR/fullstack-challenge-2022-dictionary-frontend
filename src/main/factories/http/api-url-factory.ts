export const makeApiUrl = (path: string): string =>
  `${process.env.BASE_URL}${path}`
