import React, { FC } from 'react';
import Lightbox from 'react-image-lightbox';
import { I18n } from '@lingui/react';
import 'react-image-lightbox/style.css';

import { RED } from '~/constants/colors';
import { CERTIFICATES_DATA } from './certificates-data';
import { List, Figure, Img } from './styled';

interface Props {
  photoIndex: number;
  setPhotoIndex: (index: number) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onItemClick: (index: number) => void;
}

export const CertificatesListView: FC<Props> = ({
  photoIndex,
  setPhotoIndex,
  isOpen,
  setIsOpen,
  onItemClick,
}) => (
  <I18n>
    {({ i18n }) => (
      <List>
        {isOpen && (
          <Lightbox
            mainSrc={CERTIFICATES_DATA[photoIndex].src}
            nextSrc={
              CERTIFICATES_DATA[(photoIndex + 1) % CERTIFICATES_DATA.length].src
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
            reactModalStyle={{ color: RED }}
            imagePadding={100}
            wrapperClassName="wrapperClassName"
            prevLabel="previous-project"
            nextLabel="next-project"
          />
        )}
        {CERTIFICATES_DATA.map(({ src, alt }, index) => (
          <li key={src}>
            <Figure onClick={() => onItemClick(index)}>
              <Img src={src} alt={alt} />
            </Figure>
          </li>
        ))}
      </List>
    )}
  </I18n>
);
