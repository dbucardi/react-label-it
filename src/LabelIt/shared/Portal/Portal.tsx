import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const [mountPoint, setMountpoint] = useState<HTMLDivElement>();

  useEffect(() => {
    const body = document.querySelector('body');
    const mount = document.createElement('div');
    mount.classList.add('portal-container');
    body.appendChild(mount);
    setMountpoint(mount);
    return () => {
      body.removeChild(mountPoint);
    };
  }, []);

  return mountPoint ? createPortal(children, mountPoint) : null;
};

export default Portal;
