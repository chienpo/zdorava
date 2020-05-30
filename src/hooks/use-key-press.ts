import { useEffect } from 'react';

export const useKeyPress = (keyCode: number, onEscape: () => void) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === keyCode) onEscape();
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [keyCode, onEscape]);
};
