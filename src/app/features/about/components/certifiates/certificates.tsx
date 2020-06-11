import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { CERTIFICATES_DATA } from '../../../../../constants/cartificates';
import { Figure, Img, GalleryRow } from './styled';

const data = CERTIFICATES_DATA.map(({ src }) => src);

export const Certificates = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const onItemClick = (index: number) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <GalleryRow>
      {isOpen && (
        <Lightbox
          mainSrc={CERTIFICATES_DATA[photoIndex].src}
          nextSrc={
            CERTIFICATES_DATA[(photoIndex + 1) % CERTIFICATES_DATA.length].src
          }
          prevSrc={
            CERTIFICATES_DATA[
              (photoIndex + data.length - 1) % CERTIFICATES_DATA.length
            ].src
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + data.length - 1) % CERTIFICATES_DATA.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % CERTIFICATES_DATA.length)
          }
          imageTitle={
            CERTIFICATES_DATA[(photoIndex + 1) % CERTIFICATES_DATA.length]
              .itemName
          }
          imageCaption={
            CERTIFICATES_DATA[(photoIndex + 1) % CERTIFICATES_DATA.length]
              .itemDescription
          }
          reactModalStyle={{ color: 'yellow' }}
          imagePadding={100}
          wrapperClassName="wrapperClassName"
          prevLabel="previous-project"
          nextLabel="next-project"
        />
      )}
      {CERTIFICATES_DATA.map(({ src, alt }, index) => (
        <Figure key={src} onClick={() => onItemClick(index)}>
          <Img src={src} alt={alt} />
        </Figure>
      ))}
    </GalleryRow>
  );
};
