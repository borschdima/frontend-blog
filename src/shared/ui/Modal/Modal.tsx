import { ReactNode, useCallback, useEffect, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Portal } from 'shared/ui/Portal/Portal';

import classes from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  open?: boolean;
  parentElement?: HTMLElement;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    open,
    parentElement,
    onClose,
  } = props;

  const [isClosing, setIsClosing] = useState(false);

  const mods: Record<string, boolean> = {
    [classes.opened]: open,
    [classes.closing]: isClosing,
  };

  const handleClose = useCallback(() => setIsClosing(true), []);

  const handleAnimationEnd = () => {
    if (isClosing) {
      if (onClose) onClose();

      setIsClosing(false);
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') handleClose();
  }, [handleClose]);

  useEffect(() => {
    if (open) window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, open]);

  if (!open && !isClosing) return null;

  return (
    <Portal element={parentElement}>
      <div className={classNames(classes.modal, mods, [className])} onAnimationEnd={handleAnimationEnd}>
        <div className={classes.content}>{children}</div>
        <button
          aria-label="overlay"
          className={classes.overlay}
          type="button"
          onClick={handleClose}
        />
      </div>
    </Portal>
  );
};
