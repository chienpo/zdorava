import React, { useState, FC } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { I18n } from '@lingui/react';

import { CERTIFICATES_DATA } from './certificates-data';
import { Figure, Img, List } from './styled';

export const CertificatesList: FC = () => {
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onItemClick = (index: number) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <I18n>
      {({ i18n }) => (
        <>
          <List>
            {CERTIFICATES_DATA.map(({ src, alt }, index) => (
              <li key={src}>
                <Figure onClick={() => onItemClick(index)}>
                  <Img src={src} alt={alt} />
                </Figure>
              </li>
            ))}
          </List>
          {isOpen && (
            <Lightbox
              mainSrc={CERTIFICATES_DATA[photoIndex].src}
              nextSrc={
                CERTIFICATES_DATA[(photoIndex + 1) % CERTIFICATES_DATA.length]
                  .src
              }
              prevSrc={
                CERTIFICATES_DATA[
                  (photoIndex + CERTIFICATES_DATA.length - 1) %
                    CERTIFICATES_DATA.length
                ].src
              }
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex(
                  (photoIndex + CERTIFICATES_DATA.length - 1) %
                    CERTIFICATES_DATA.length
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
              imagePadding={100}
              prevLabel="previous-project"
              nextLabel="next-project"
            />
          )}
        </>
      )}
    </I18n>
  );
};
