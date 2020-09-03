# Juno API Wrapper

A Wrapper for [Juno API](https://dev.juno.com.br/api/v2)

## Installation

```shell
$ npm install --save juno-api-wrapper

$ yarn add juno-api-wrapper
```

## API

### getAccessToken

Returns the oauth token to be used on `Juno` constructor.

#### Example
```typescript
  import { getAccessToken } from 'juno-api-wrapper'

  const token = await getAccessToken(clientId: string, clientSecret: string, isSandbox: boolean)
```

### Juno

Creates a new `Juno` instance.

#### Arguments

```shell
<options> - JavaScript Object with configuration options
```

##### Options

```shell
accessToken: string - oauth token, got with getAccessToken method

resourceToken: string - private token, generated on Juno platform

isSandbox: boolean - if you only want to test your API, set to true; default === false
```

#### Example

```typescript
  const options = {
    accessToken: token,
    resourceToken: process.env.TOKEN,
  };

  const juno = new Juno(options);

  // returns a balance object
  // {
  //   balance: number;
  //   withheldBalance: number;
  //   transferableBalance: number;
  // }
  juno.getBalance(): Promise

  // returns a list of available banks
  // { name: string; number: string }[]
  juno.listBanks(): Promise

  // creates a charge
  // receiveis 2 arguments:
  //
  // newCharge = {
  //   description: string;
  //   amount: string;
  //   installments: number;
  //   paymentType: 'BOLETO' | 'CREDIT_CARD';
  // }
  //
  // billing = {
  //   name: string;
  //   document: string; CPF | CNPJ
  //   email: string;
  //   phone: string;
  // }
  //
  // return an array of Charges
  juno.createCharge(newCharge, billing): Promise

  // returns the charges status
  //
  // response = {
  //   amount: number;
  //   payments: {
  //     id: string;
  //     code: number;
  //     status: string;
  //     date: string;
  //     amount: number;
  //     transactionId: string;
  //     failReason: string;
  //   }[];
  // }
  juno.checkChargeStatus(chargeId: string): Promise
```
