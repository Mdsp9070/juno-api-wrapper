import axios from 'axios';
import { Authorization } from '../@types/juno';
import { AppError } from '../errors/AppError';
import { getClientHash } from '../utils/utils';

export async function getAccessToken(
  clientId: string,
  clientSecret: string,
  isSandbox: boolean
): Promise<string> {
  const hash = getClientHash(clientId, clientSecret);

  const { data, status } = await axios.post<Authorization>(
    `${
      isSandbox
        ? 'https://sandbox.boletobancario.com/authorization-server/oauth/token'
        : 'https://api.juno.com.br/authorization-server/oauth/token'
    }`,
    'grant_type=client_credentials',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic: ${hash}`,
      },
    }
  );

  if (status !== 200) throw new AppError('Cannot authorizate', status);

  return data.access_token;
}
