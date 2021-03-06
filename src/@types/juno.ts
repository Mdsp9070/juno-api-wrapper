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
      billetDetails: {
        bankAccount: string;
        ourNumber: string;
        barcodeNumber: string;
        portfolio: string;
      };
      payments: {
        id: string;
        code: number;
        status: string;
        date: string;
        amount: number;
        transactionId: string;
        failReason: string;
      }[];
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
  totalAmount?: number;
  amount?: number;
  installments: number;
  paymentTypes: ['BOLETO' | 'CREDIT_CARD'];
}

export interface Billing {
  name: string;
  document: string;
  email: string;
  phone: string;
}

export interface PaymentBilling {
  email: string;
  address: {
    street: string;
    number: string;
    complement: string;
    city: string;
    state: string;
    postCode: string;
  };
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

export interface CardDetails {
  creditCardHash: string;
  creditCardId?: string;
}

export type BanksResponse = { name: string; number: string }[];

export type ChargesResponse = {
  id: string;
  code: number;
  dueDate: string;
  billetDetails: {
    bankAccount: string;
    ourNumber: string;
    barcodeNumber: string;
    portfolio: string;
  };
}[];

export interface Payment {
  transactionId: string;
  installments: number;
  payments: {
    id: string;
    chargeId: string;
    date: string;
    realeaseDate: string;
    amount: number;
    fee: number;
    type: string;
    status: string;
    transactionId: string;
    failReason: string;
  }[];
}
