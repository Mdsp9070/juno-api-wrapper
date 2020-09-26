import { Juno, getAccessToken } from './index';

const privateToken =
  'D55AF5AA54F28CACFA590C285E3CCA111E36115B11C7883C94D98B8CC3D4EEB0';
const publicToken =
  '5234E874114F2FB192A78DDFD5180498F949F429AD8DA6C9370F8533F27E531F';
const clientId = 'HNWy9I4TKjrPYOse';
const clientSecret = 'p*5aRpY+3~:C|6MMzFEyZ[hge^Qs?nOF';

(async () => {
  try {
    const accessToken = await getAccessToken(clientId, clientSecret, true);

    console.log(accessToken);

    const juno = new Juno({
      isSandbox: true,
      accessToken,
      resourceToken: privateToken,
    });

    const banks = await juno.listBanks();

    console.log(banks);
  } catch (e) {
    console.log(e);
  }
})();
