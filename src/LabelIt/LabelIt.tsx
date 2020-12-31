import React from 'react';
import CanvasLayer from './CanvasLayer';
import ImageLayer from './ImageLayer';
import { StyledLabelIt } from './Style';

export interface LabelItProps {
  src: string;
  children: any[];
}

const LabelIt = (props: LabelItProps) => {
  const { src, children = [] } = props;

  return (
    <StyledLabelIt>
      <ImageLayer src={src} />
      <CanvasLayer>{children}</CanvasLayer>
    </StyledLabelIt>
  );
};

export default LabelIt;
