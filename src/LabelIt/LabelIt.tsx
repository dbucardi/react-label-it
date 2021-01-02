import React from 'react';
import CanvasLayer from './CanvasLayer';
import ImageLayer from './ImageLayer';
import { StyledLabelIt } from './Style';

export interface LabelItProps {
  src: string;
  children: React.ReactNode[];
  readonly?: boolean;
  onAdd?: (newLabel) => void;
}

const LabelIt = (props: LabelItProps) => {
  const { src, children = [], readonly = false, onAdd } = props;

  return (
    <StyledLabelIt>
      <ImageLayer src={src} />
      <CanvasLayer readonly={readonly} onAdd={onAdd}>
        {children}
      </CanvasLayer>
    </StyledLabelIt>
  );
};

export default LabelIt;
