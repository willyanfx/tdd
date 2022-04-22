import axios from 'axios';
import { randPort, randPost } from '@ngneat/falso';

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.post.mockResolvedValue({
    data: randPost({ length: 1 }),
    status: randPort({ length: 3 })
  });
  return mockedAxios;
};
