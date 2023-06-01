import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import { BurgerBtn } from 'widgets/BurgerBtn';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

  const { t } = useTranslation('components/navbar');

  const handleToggleAuthModal = useCallback(() => {
    setIsAuthModalOpened((prev) => !prev);
  }, []);

  return (
    <div data-testid="navbar" className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.navbarControls}>
        <BurgerBtn />
      </div>

      <div className={classes.navbarActions}>
        <div className={classes.navbarSwitchers}>
          <LangSwitcher />
          <ThemeSwitcher />
        </div>

        <Button theme={ButtonTheme.LINK} onClick={handleToggleAuthModal}>{t('login')}</Button>

        <Modal open={isAuthModalOpened} onClose={handleToggleAuthModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci doloribus at,
          enim qui eos reprehenderit? Deleniti recusandae sequi quia perspiciatis. Perferendis temporibus
          tempora deleniti. Laborum nesciunt dolorum recusandae hic repellat officia, tempore soluta facilis
          odit nihil consequatur itaque maiores eaque voluptatibus ratione quia enim suscipit. In, consequuntur
          sit! Dolores quod quasi atque porro ex quae hic rem exercitationem molestias repellendus explicabo, dolor
          vel temporibus aliquam ratione cum? Eaque optio, ipsam quisquam quis animi eligendi accusantium
          iste cupiditatesuscipit, nihil dolores alias repudiandae pariatur iure obcaecati fuga itaque illo
          voluptates eius in repellendus! Velit, praesentium! Iusto dolores quibusdam rem illo.
        </Modal>
      </div>
    </div>
  );
};
