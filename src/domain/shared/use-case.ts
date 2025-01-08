export abstract class UseCase<T, D> {
  abstract execute(dto: D): Promise<T>
}

export abstract class UseCaseSingle<T> {
  abstract execute(): Promise<T>
}
