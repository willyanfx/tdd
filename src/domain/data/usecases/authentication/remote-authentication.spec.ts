import { HttpPostClientSpy } from '../../test/mock-http-client';
import { RemoteAuthentication } from './remote-authentication';
import { randDomainName } from '@ngneat/falso';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = randDomainName()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
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
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
