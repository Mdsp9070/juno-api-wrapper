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
      }[]
    }
  }
}

declare namespace Returns {
  export type Banks = { name: string, number: string;}[]
}
