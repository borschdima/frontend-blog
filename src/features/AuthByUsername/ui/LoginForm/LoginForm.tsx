import { FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';

import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  onClose?: () => void;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className, onClose } = props;

  const { username, password, error, isLoading } = useSelector(getLoginState);

  const dispatch = useDispatch();

  const handleChangeUsername = useCallback((value) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const { t } = useTranslation('components/login-form');

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    (dispatch(loginByUsername({ username, password })) as any)
      .unwrap()
      .then(onClose);
  };

  return (
    <form className={classNames(classes.loginForm, {}, [className])} onSubmit={handleSubmitForm}>
      <Text title={t('title')} />
      <Input
        className={classes.loginFormInput}
        placeholder={t('placeholder.username')}
        value={username}
        onChange={handleChangeUsername}
      />
      <Input
        className={classes.loginFormInput}
        placeholder={t('placeholder.password')}
        type="password"
        value={password}
        onChange={handleChangePassword}
      />

      {error && <Text text={t('error')} theme={TextTheme.ERROR} />}

      <Button
        className={classes.loginFormBtn}
        disabled={isLoading}
        theme={ButtonTheme.OUTLINE}
        type="submit"
      >
        {t('login')}
      </Button>
    </form>
  );
});
