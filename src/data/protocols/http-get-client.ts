export type HttpRequest = {
  url: string
  method: 'get'
  body?: any
  headers?: any
}
export interface HttpResponse<T = unknown> {
  statusCode: HttpStatusCode
  body?: T
}

export interface HttpGetClient<R = unknown> {
  get(url: string): Promise<HttpResponse<R>>
}

export enum HttpStatusCode {
  ok = 200,
  notFound = 404,
}
