export class DtoException extends Error {
  constructor(message: string) {
    super(`Error in DTO: ${message}`)
  }
}
