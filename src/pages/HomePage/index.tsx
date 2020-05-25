import React, { useState } from 'react';
import { Container } from './styles';
import { imageAPI } from '../../services/api';

import Slider from '../../components/Slider';

interface Obj {
  id: number;
  url: string;
}

type Images = Obj[];

const HomePage: React.FC = () => {
  const [images, setImages] = useState<Images>(imageAPI);

  return (
    <Container>
      <Slider controls bullets duration={5000} imageList={images} />
    </Container>
  );
};

export default HomePage;
