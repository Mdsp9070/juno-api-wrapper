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
        dueDate: string | Date;
      }[];
    };
  }

  export interface Balance {
    balance: number;
    withheldBalance: number;
    transferableBalance: number;
  }

  export interface Charge {
    description: string;
    amount: string;
    installments: number;
  }

  export interface Billing {
    name: string;
    document: string;
    email: string;
    phone: string;
  }
}

declare namespace Returns {
  export type Banks = { name: string; number: string }[];
  export type Charges = {
    id: string;
    code: number;
    dueDate: string | Date;
  }[];
}
