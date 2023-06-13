import { AxiosResponse } from 'axios';

export type HttpAdapterResponse = AxiosResponse;

export type HttpClientMethod = (
  endpoint: string,
  config?: Record<string, AxiosResponse>
) => Promise<HttpAdapterResponse>;

export type HttpClientMethodWithData = (
  endpoint: string,
  data: Record<string, unknown>,
  config?: Record<string, AxiosResponse>
) => Promise<HttpAdapterResponse>;

export interface HttpClient {
  get: HttpClientMethod;
  post: HttpClientMethodWithData;
  put: HttpClientMethodWithData;
  delete: HttpClientMethod;
  patch: HttpClientMethodWithData;
}
