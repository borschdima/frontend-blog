import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement | null;
}

export const Portal = (props: PortalProps): any => {
  const {
    children,
    element = document.body,
  } = props;

  if (!element) return children;

  return createPortal(children, element);
};
