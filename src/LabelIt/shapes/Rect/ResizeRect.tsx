import React from 'react';
import { StyledResizeRect } from '../../Style';

export interface ResizeRectProps {
  index: number;
  x: number;
  y: number;
  position: string;
}

const ResizeRect = (props: ResizeRectProps) => {
  const { index, x, y, position } = props;
  return (
    <StyledResizeRect
      data-position={position}
      data-index={index}
      className={`resizer ${position}`}
      x={x}
      y={y}
      width={6}
      height={6}
    />
  );
};

export default ResizeRect;
