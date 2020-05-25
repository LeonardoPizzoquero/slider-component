import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { Container, ArrowLeft, ArrowRight, Image } from './styles';

interface Obj {
  id: number;
  url: string;
}

interface Props {
  imageList: Obj[];
  duration?: number;
}

const Slider: React.FC<Props> = ({ imageList = [], duration = 5000 }) => {
  const [images, setImages] = useState(imageList);

  const isEmpty = useMemo(() => images.length > 0, [images]);
  const imageListLength = useMemo(() => images.length - 1, [images]);

  const [currentImage, setCurrentImage] = useState(imageListLength);

  const nextImage = useCallback(() => {
    if (currentImage >= imageListLength) setCurrentImage(0);
    else setCurrentImage(currentImage + 1);
  }, [currentImage, imageListLength]);

  function prevImage(): void {
    if (currentImage <= 0) setCurrentImage(imageListLength);
    else setCurrentImage(currentImage - 1);
  }

  useEffect(() => {
    setTimeout(nextImage, duration);
  }, [duration, nextImage]);

  return (
    <Container>
      <ArrowLeft onClick={prevImage}>
        <FiChevronLeft size={100} color="#ddd" />
      </ArrowLeft>
      <ArrowRight onClick={nextImage}>
        <FiChevronRight size={100} color="#ddd" />
      </ArrowRight>

      {isEmpty &&
        images.map((image, index) => {
          return (
            <Image
              current={currentImage === index}
              index={index}
              key={image.id}
              src={image.url}
              alt={image.url}
            />
          );
        })}
    </Container>
  );
};

export default Slider;
