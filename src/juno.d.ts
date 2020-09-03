declare namespace Juno {
  export interface Authorization {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    user_name: string;
    jti: string;
  }

  export interface Options {
    accessToken: string;
    resourceToken: string;
    resourceOptions: string;
    isSandbox: boolean;
  }

  export interface Banks {
    _embedded: {
      banks: {
        number: string;
        name: string;
      }[];
    };
  }

  export interface Charges {
    _embedded: {
      charges: {
        id: string;
        code: number;
        dueDate: string;
        payments: {
          id: string;
          code: number;
          status: string;
          date: string;
          amount: number;
          transactionId: string;
          failReason: string;
        }[]
      }[];
    };
  }

  export interface Balance {
    balance: number;
    withheldBalance: number;
    transferableBalance: number;
  }

  export interface NewCharge {
    description: string;
    amount: string;
    installments: number;
    paymentType: 'BOLETO' | 'CREDIT_CARD';
  }

  export interface Billing {
    name: string;
    document: string;
    email: string;
    phone: string;
  }

  export interface ChargeStatus {
    amount: number;
    payments: {
      id: string;
      code: number;
      status: string;
      date: string;
      amount: number;
      transactionId: string;
      failReason: string;
    }[];
  }
}

declare namespace Returns {
  export type Banks = { name: string; number: string }[];
  export type Charges = {
    id: string;
    code: number;
    dueDate: string;
  }[];
}
