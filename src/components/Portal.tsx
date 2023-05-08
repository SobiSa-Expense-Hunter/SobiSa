import { createPortal } from 'react-dom';

const Portal = ({ children }: { children: React.ReactNode }) => {
  const element = document.getElementById('modal-root') as HTMLElement;
  return createPortal(children, element);
};
export default Portal;
