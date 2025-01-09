export interface PrimitivePath {
  name: string
  description: string
  icon: string
  path: string
  title: string
  children?: PrimitivePath[]
}

export class Path {
  constructor(private readonly path: PrimitivePath) {}

  static create(path: PrimitivePath): Path {
    return new Path(path)
  }

  get name(): string {
    return this.path.name
  }

  get description(): string {
    return this.path.description
  }

  get icon(): string {
    return this.path.icon
  }

  get link(): string {
    return this.path.path
  }

  get title(): string {
    return this.path.title
  }

  toValue(): PrimitivePath {
    return this.path
  }
}
