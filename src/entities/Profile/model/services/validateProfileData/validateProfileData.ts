import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (data?: Profile): ValidateProfileError[] => {
  if (!data) return [ValidateProfileError.NO_DATA];

  const errors = [];

  const { age, username, first, country } = data;

  if (!first || !username) errors.push(ValidateProfileError.INCORRECT_USER_DATA);

  if (!age || !Number.isInteger(age)) errors.push(ValidateProfileError.INCORRECT_AGE);

  if (!country) errors.push(ValidateProfileError.INCORRECT_COUNTRY);

  return errors;
};
