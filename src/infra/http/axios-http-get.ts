import axios, { AxiosResponse } from 'axios'
import { HttpGetClient, HttpResponse } from '../../data/protocols'

export class AxiosHttpGet implements HttpGetClient {
  async get(url: string): Promise<HttpResponse<any>> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url,
      })
    } catch (error: any) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }
}
