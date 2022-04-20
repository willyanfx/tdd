import { BadRequestError } from '@/domain/errors/bad-request-error ';
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error';
import { NotFoundError } from '@/domain/errors/not-found';
import { ServerError } from '@/domain/errors/server-error';
import { AuthenticationParams } from '@/domain/usecases/authentication';
import { HttpPostClient } from '../../protocols/http/http-post-client';
import { HttpStatusCode } from '../../protocols/http/http-response';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;

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
