import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('pages/main');

  return <div>{t('title')}</div>;
};

export default MainPage;
