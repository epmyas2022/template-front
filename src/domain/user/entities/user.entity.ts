export interface PrimitiveUser {
  id: number
  name: string
  lastname: string
  username: string
  email: string
  phone?: string
  avatar?: string
}

export class User {
  constructor(private readonly user: PrimitiveUser) {}

  static create(user: PrimitiveUser): User {
    return new User(user)
  }

  get id(): number {
    return this.user.id
  }

  get name(): string {
    return this.user.name
  }

  get username(): string {
    return this.user.username
  }

  get email(): string {
    return this.user.email
  }

  toValue(): PrimitiveUser {
    return this.user
  }
}
