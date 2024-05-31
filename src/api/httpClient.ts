import axios, {AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';

const client = axios.create({
  baseURL: Config.API_URL,
});

export interface HttpResponse<T = void> {
  status: string;
  message: string;
  data: T;
}

export interface ErrorType {
  message: string;
  error: string;
  statusCode: number;
  path: string;
  timestamp: string;
}

export class ServerError extends Error implements HttpResponse {
  constructor({status, message}: HttpResponse) {
    super(message);

    this.status = status;
    this.data = undefined;
  }

  status: string;
  data: void;
}

export const httpClient = () => {
  const get = async <T>(url: string, config?: AxiosRequestConfig) => {
    return client.get<HttpResponse<T>>(url, config);
  };
  const post = async <T>(
    url: string,
    body?: any,
    config?: AxiosRequestConfig,
  ) => {
    return client.post<HttpResponse<T>>(url, body, config);
  };
  const patch = async <T>(
    url: string,
    body?: any,
    config?: AxiosRequestConfig,
  ) => {
    return client.patch<HttpResponse<T>>(url, body, config);
  };
  const remove = async <T>(url: string, config?: AxiosRequestConfig) => {
    return client.delete<HttpResponse<T>>(url, config);
  };

  function applyToken(jwt: string) {
    client.defaults.headers.Authorization = `Bearer ${jwt}`;
  }

  function clearToken() {
    client.defaults.headers.Authorization = null;
  }

  return {get, post, patch, remove, applyToken, clearToken};
};

export default httpClient;
