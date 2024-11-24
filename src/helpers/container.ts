import 'reflect-metadata'
import { Container as InversifyContainer, type interfaces } from 'inversify'


type contructType<T> = {
  symbol: symbol
  constructor: interfaces.Newable
  generic: T
}
export class Container {
  private static _instance: Container | null = null
  private readonly container: InversifyContainer
  private static readonly contructors: contructType<unknown>[] = []

  private constructor() {
    this.container = new InversifyContainer()

    for (const contructor of Container.contructors) {
      this.container
        .bind<typeof contructor.generic>(contructor.symbol)
        .to(contructor.constructor)
        .inSingletonScope()
    }
  }

  public static getInstance(): Container {
    if (!Container._instance) {
      Container._instance = new Container()
    }
    return Container._instance
  }

  public get<T>(serviceIdentifier: symbol): T {
    return this.container.get<T>(serviceIdentifier)
  }

  public static exists(serviceIdentifier: symbol): boolean {
    return Container.contructors.some((c) => c.symbol === serviceIdentifier)
  }

  public static register<T>(serviceIdentifier: symbol, constructor: interfaces.Newable<T>) {
    if (this.exists(serviceIdentifier)) {
      throw new Error(`Service ${serviceIdentifier.toString()} already exists`)
    }
    this.contructors.push({ symbol: serviceIdentifier, constructor, generic: {} as T })

    return this
  }
}
