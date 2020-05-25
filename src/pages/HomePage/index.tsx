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
      <Slider imageList={images} duration={3000} />
    </Container>
  );
};

export default HomePage;
