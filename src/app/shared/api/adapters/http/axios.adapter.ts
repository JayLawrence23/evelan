import originalAxios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpAdapterResponse, HttpClient } from './http.type';

const BASE_URL = process.env.DEV;

export class AxiosAdapter implements HttpClient {
  constructor(private axiosDep: AxiosInstance) {}

  get(endpoint: string, config: AxiosRequestConfig = {}) {
    return this.axiosDep.get(endpoint, {
      ...config,
    }) as Promise<HttpAdapterResponse>;
  }

  post(
    endpoint: string,
    data?: Record<string, unknown>,
    config: AxiosRequestConfig = {}
  ) {
    return this.axiosDep.post(endpoint, data, {
      ...config,
    }) as Promise<HttpAdapterResponse>;
  }

  put(
    endpoint: string,
    data: Record<string, unknown>,
    config: AxiosRequestConfig = {}
  ) {
    return this.axiosDep.put(endpoint, data, {
      ...config,
    }) as Promise<HttpAdapterResponse>;
  }

  delete(endpoint: string, config: AxiosRequestConfig = {}) {
    return this.axiosDep.delete(endpoint, {
      ...config,
    }) as Promise<HttpAdapterResponse>;
  }

  patch(
    endpoint: string,
    data: Record<string, unknown>,
    config: AxiosRequestConfig = {}
  ) {
    return this.axiosDep.patch(endpoint, data, {
      ...config,
    }) as Promise<HttpAdapterResponse>;
  }
}

const axiosInstance = originalAxios.create({
  baseURL: BASE_URL,
});

const axios = new AxiosAdapter(axiosInstance);

export default axios