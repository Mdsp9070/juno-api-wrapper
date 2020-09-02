import axios, { AxiosInstance } from 'axios';
import { AppError } from './errors/AppError';

export class Juno {
  api: AxiosInstance;

  constructor(private options: Juno.Options) {
    this.api = axios.create({
      baseURL: this.options.isSandbox
        ? 'https://sandbox.boletobancario.com'
        : 'https://api.juno.com.br',
    });
  }

  async banks(): Promise<Returns.Banks> {
    const { data, status } = await this.api.get<Juno.Banks>('/data/banks');

    if (status !== 200) throw new AppError('Cannot get bank list', status)

    return data._embedded.banks
  }
}
