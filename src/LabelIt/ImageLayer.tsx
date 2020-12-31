import React from 'react';
import { BaseShapeProps } from './shared/interfaces/shapes';
import { StyledImageLayer } from './Style';

export interface ImageLayerProps {
  src: string;
}

const ImageLayer = (props: ImageLayerProps) => {
  const { src } = props;
  return <StyledImageLayer src={src} />;
};

export default ImageLayer;
