import { AxiosHttpClient } from './axios-http-client';
import axios from 'axios';
import { randUrl } from '@ngneat/falso';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

describe('AxiosHttpClient', () => {
  test('should call axios with correct url and verb', async () => {
    const url = randUrl();
    const sut = makeSut();
    await sut.post({ url: url });
    expect(mockedAxios.post).toHaveBeenCalledWith(url);
  });
});
