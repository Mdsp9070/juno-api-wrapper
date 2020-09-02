export class AppError {
  public readonly message: string;
  public readonly status: number;

  constructor(message: string, code = 400) {
    (this.message = message), (this.status = code);
  }
}
