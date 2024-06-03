export class ZodValidationError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = 'ZodValidationError';
  }
}
