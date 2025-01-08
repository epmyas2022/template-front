export interface PrimitiveUser {
  id: number
  name: string
  username: string
  password: string
}

export class User {
  constructor(private readonly user: PrimitiveUser) {}

  static create(user: PrimitiveUser): User {
    return new User(user)
  }

  get password(): string {
    return this.user.password
  }

  get id(): number {
    return this.user.id
  }

  get name(): string {
    return this.user.name
  }

  toValue(): PrimitiveUser {
    return this.user
  }
}
