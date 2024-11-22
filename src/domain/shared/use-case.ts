export abstract class UseCase<T, D> {
  abstract execute(dto: D): Promise<T>
}
