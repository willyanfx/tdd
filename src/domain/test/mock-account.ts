import { AccountModel } from '../models';
import { AuthenticationParams } from '../usecases';
import { randEmail, randPassword, randUuid } from '@ngneat/falso';

export const mockAuthentication = (): AuthenticationParams => ({
  email: randEmail(),
  password: randPassword()
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: randUuid()
});
