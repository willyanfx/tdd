import { AxiosHttpClient } from './axios-http-client';
import axios from 'axios';
import { randUrl } from '@ngneat/falso';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AxiosHttpClient', () => {
  test('should call axios with correct url', async () => {
    const sut = new AxiosHttpClient();
    const url = randUrl();
    await sut.post({ url: url });
    expect(mockedAxios).toHaveBeenCalledWith(url);
  });
});
