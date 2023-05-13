import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import classes from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props;

  const { i18n } = useTranslation();

  const handleClickChangeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(classes.langSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={handleClickChangeLang}
    >
      {i18n.language === 'ru' ? 'en' : 'руc'}
    </Button>
  );
};
