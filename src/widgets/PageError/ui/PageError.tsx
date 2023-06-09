import { useTranslation } from 'react-i18next';
import { FallbackProps } from 'react-error-boundary';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import classes from './PageError.module.scss';

export const PageError = ({ resetErrorBoundary }: FallbackProps) => {
  const { t } = useTranslation('components/page_error');

  return (
    <div className={classNames(classes.pageError)}>
      <p>{t('uncaught_error')}</p>
      <Button onClick={resetErrorBoundary}>
        {t('refresh')}
      </Button>
    </div>
  );
};
