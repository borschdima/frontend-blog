import { FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';

import classes from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onClose?: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onClose } = props;

  useDynamicModuleLoader(initialReducers);

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const dispatch = useAppDispatch();

  const handleChangeUsername = useCallback((value) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const { t } = useTranslation('components/login_form');

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    dispatch(loginByUsername({ username, password }))
      .unwrap()
      .then(onClose)
      .catch(() => {});
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

export default LoginForm;
