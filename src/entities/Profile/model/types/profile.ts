import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
  NO_DATA = 'no_data',
  INCORRECT_USER_DATA = 'incorrect_user_data',
  INCORRECT_AGE = 'incorrect_age',
  INCORRECT_COUNTRY = 'incorrect_country',
  SERVER_ERROR = 'server_error',
}

export interface Profile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileScheme {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
