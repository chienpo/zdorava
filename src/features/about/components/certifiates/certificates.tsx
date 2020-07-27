import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { I18n } from '@lingui/react';
import 'react-image-lightbox/style.css';

import { RED } from 'constants/colors';
import { CERTIFICATES_DATA } from 'constants/certificates';
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
    <I18n>
      {({ i18n }) => (
        <GalleryRow>
          {isOpen && (
            <Lightbox
              mainSrc={CERTIFICATES_DATA[photoIndex].src}
              nextSrc={
                CERTIFICATES_DATA[(photoIndex + 1) % CERTIFICATES_DATA.length]
                  .src
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
              imageTitle={i18n._(
                CERTIFICATES_DATA[photoIndex % CERTIFICATES_DATA.length].title
              )}
              imageCaption={i18n._(
                CERTIFICATES_DATA[photoIndex % CERTIFICATES_DATA.length]
                  .description
              )}
              reactModalStyle={{ color: RED }}
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
      )}
    </I18n>
  );
};
