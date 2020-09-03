import pkg from '../package.json';
import axios, { AxiosInstance } from 'axios';
import { AppError } from './errors/AppError';

export class Juno {
  private api: AxiosInstance;
  private headers: { [key: string]: string | number };

  constructor(private options: Juno.Options) {
    this.api = axios.create({
      baseURL: this.options.isSandbox
        ? 'https://sandbox.boletobancario.com/api-integration'
        : 'https://api.juno.com.br',
    });

    this.headers = {
      'User-Agent': `${pkg.name}/${pkg.version}`,
      'X-Api-Version': 2,
      'X-Resource-Token': this.options.resourceToken,
      Authorization: `Bearer ${this.options.accessToken}`,
    };
  }

  async banks(): Promise<Returns.Banks> {
    const { data, status } = await this.api.get<Juno.Banks>('/data/banks', {
      headers: this.headers,
    });

    if (status !== 200 || !data._embedded.banks.length)
      throw new AppError('Cannot get bank list', status);

    return data._embedded.banks;
  }

  async balance(): Promise<Juno.Balance> {
    const { data, status } = await this.api.get<Juno.Balance>('/balance', {
      headers: this.headers,
    });

    if (status !== 200 || !data.balance)
      throw new AppError('Cannot get Balance', status);

    return data;
  }

  async createCharge(
    charge: Juno.NewCharge,
    billing: Juno.Billing
  ): Promise<Returns.Charges> {
    const body = {
      charge,
      billing,
    };

    const { data, status } = await this.api.post<Juno.Charges>(
      '/charges',
      body,
      { headers: this.headers }
    );

    if (status !== 200 || !data._embedded.charges.length)
      throw new AppError('Cannot create Charge', status);

    return data._embedded.charges;
  }

  async checkChargeStatus(chargeId: string): Promise<Juno.ChargeStatus> {
    const { data, status } = await this.api.get<Juno.ChargeStatus>(
      `/charges/${chargeId}`,
      { headers: this.headers }
    );

    if (status !== 200 || !data.amount)
      throw new AppError('Cannot get charge status', status);

    return data;
  }
}
