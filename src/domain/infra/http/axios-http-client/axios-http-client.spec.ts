import { AxiosHttpClient } from './axios-http-client';
import { HttpPostParams } from '@/domain/data/protocols/http';
import axios from 'axios';
import { randPort, randPost, randUrl } from '@ngneat/falso';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedAxiosResult = {
  data: randPost({ length: 1 }),
  status: randPort({ length: 3 })
};
mockedAxios.post.mockResolvedValue(mockedAxiosResult);

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

const mockPostRequest = (): HttpPostParams<any> => ({
  url: randUrl(),
  body: randPost({ length: 1 })
});

describe('AxiosHttpClient', () => {
  test('should call axios with correct values', async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  test('should return the correct statusCode and body', async () => {
    const sut = makeSut();

    const httpResponse = await sut.post(mockPostRequest());
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    });
  });
});
