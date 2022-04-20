export class ServerError extends Error {
  constructor() {
    super('Internal Server Error server error');
    this.name = 'ServerError';
  }
}
