import React, {useState} from 'react';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

import {CERTIFICATES_DATA} from "../../../../constants/cartificates";
import { Figure, Img, GalleryRow } from "./styled";

const data = CERTIFICATES_DATA.map(({ path }) => path);

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
          mainSrc={data[photoIndex]}
          nextSrc={data[(photoIndex + 1) % data.length]}
          prevSrc={data[(photoIndex + data.length - 1) % data.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + data.length - 1) % data.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % data.length)
          }
          imageTitle={data[(photoIndex + 1) % data.length].name}
          imageCaption={data[(photoIndex + 1) % data.length].description}
          reactModalStyle={{ color: 'yellow' }}
          imagePadding={100}
          wrapperClassName="wrapperClassName"
          prevLabel="previous-project"
          nextLabel="next-project"
        />
      )}
      {CERTIFICATES_DATA.map(({ path, alt }, index) => (
        <Figure key={path} onClick={() => onItemClick(index)}>
          <Img src={path} alt={alt} />
        </Figure>
      ))}
    </GalleryRow>
  )
}
