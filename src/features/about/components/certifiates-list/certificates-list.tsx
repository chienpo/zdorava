import { useState, createElement, FC } from 'react';

import { CertificatesListView } from './certificates-list-view';

export const CertificatesList: FC = () => {
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onItemClick = (index: number) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };
  return createElement(CertificatesListView, {
    photoIndex,
    setPhotoIndex,
    isOpen,
    setIsOpen,
    onItemClick,
  });
};
