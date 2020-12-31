import React from 'react';
import { StyledCanvasLayer, StyledRect } from './Style';

export interface CanvasLayerProps {
  children: React.ReactNode[];
}

const CanvasLayer = (props: CanvasLayerProps) => {
  const { children } = props;
  return (
    <StyledCanvasLayer width={720} height={480}>
      {children}
    </StyledCanvasLayer>
  );
};

export default CanvasLayer;
