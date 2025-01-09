export interface PrimitiveLogin {
  token: string
  refreshToken: string
}

export class Login {
  constructor(private readonly login: PrimitiveLogin) {}

  static create(login: PrimitiveLogin): Login {
    return new Login(login)
  }

  get token(): string {
    return this.login.token
  }

  get refreshToken(): string {
    return this.login.refreshToken
  }

  toValue(): PrimitiveLogin {
    return this.login
  }
}
