import {
  BadRequestError,
  InvalidCredentialsError,
  NotFoundError,
  ServerError
} from '@/domain/errors';
import { AccountModel } from '@/domain/models/account-model';
import {
  Authentication,
  AuthenticationParams
} from '@/domain/usecases/authentication';
import { HttpPostClient, HttpStatusCode } from '../../protocols/http';

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;

      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();

      case HttpStatusCode.serverError:
        throw new ServerError();

      case HttpStatusCode.notFound:
        throw new NotFoundError();

      default:
        throw new BadRequestError();
    }
  }
}
