import { AuthenticationParams } from '@/domain/usecases';
import { AccountModel } from '@/domain/models';
import {
  BadRequestError,
  InvalidCredentialsError,
  NotFoundError,
  ServerError
} from '@/domain/errors';
import { mockAccountModel, mockAuthentication } from '@/domain/test';
import { RemoteAuthentication } from './remote-authentication';
import { HttpStatusCode } from '../../protocols/http';
import { HttpPostClientSpy } from '../../test';
import { randDomainName } from '@ngneat/falso';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>;
};

const makeSut = (url: string = randDomainName()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<
    AuthenticationParams,
    AccountModel
  >();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy
  };
};

describe('RemoteAuthetication', () => {
  test('should call HttpPostClient with correct URL', async () => {
    // Spy: cature values and faker values
    const url = randDomainName();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(url);
  });

  test('should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authParams = mockAuthentication();
    await sut.auth(authParams);
    expect(httpPostClientSpy.body).toEqual(authParams);
  });

  test('should throw InvalidCredentialsError if HttpClients return 401', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });

  test('should throw BadRequestError if HttpClients return 400', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new BadRequestError());
  });

  test('should throw ServerError if HttpClients return 500', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new ServerError());
  });

  test('should throw NotFoubdError if HttpClients return 404', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new NotFoundError());
  });

  test('should return an AccountModel if http return 200', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const httpResult = mockAccountModel();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    };
    const account = await sut.auth(mockAuthentication());
    expect(account).toEqual(httpResult);
  });
});
