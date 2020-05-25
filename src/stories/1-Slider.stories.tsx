import React from 'react';
import Slider from '../components/Slider';

import { imageAPI } from '../services/api';

export default {
  title: 'Slider',
  component: Slider,
};

export const CompleteComponent = () => {
  return <Slider imageList={imageAPI} />;
};

export const WithoutControls = () => (
  <Slider controls={false} imageList={imageAPI} />
);

export const WithoutBullets = () => {
  return <Slider bullets={false} imageList={imageAPI} />;
};

export const WithoutAllControls = () => {
  return <Slider bullets={false} controls={false} imageList={imageAPI} />;
};

export const SetShortDuration = () => {
  return <Slider duration={2000} imageList={imageAPI} />;
};
