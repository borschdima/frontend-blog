import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('pages/about');

  return <div>{t('title')}</div>;
};

export default AboutPage;
