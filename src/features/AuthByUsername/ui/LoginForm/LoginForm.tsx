import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;

  const { t } = useTranslation('components/login-form');

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={classNames(classes.loginForm, {}, [className])} onSubmit={handleSubmitForm}>
      <Input
        className={classes.loginFormInput}
        placeholder={t('placeholder.username')}
        value=""
      />
      <Input
        className={classes.loginFormInput}
        placeholder={t('placeholder.password')}
        type="password"
        value=""
      />
      <Button className={classes.loginFormBtn} theme={ButtonTheme.OUTLINE} type="submit">
        {t('login')}
      </Button>
    </form>
  );
};
