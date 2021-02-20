import React, { useEffect } from 'react';
import CanvasLayer from './CanvasLayer';
import ImageLayer from './ImageLayer';
import { StyledLabelIt } from './Style';

export interface LabelItProps {
  src: string;
  children: React.ReactNode[];
  readonly?: boolean;
  onAdd?: (newLabel) => void;
  onRemove?: () => void;
}

const LabelIt = (props: LabelItProps) => {
  const { src, children = [], readonly = false, onAdd = () => {}, onRemove = () => {} } = props;

  useEffect(() => {
    const handleRemove = (e) => {
      if (e.keyCode === 46) {
        onRemove();
      }
    };
    document.addEventListener('keyup', handleRemove);

    return () => document.removeEventListener('keyup', handleRemove);
  }, [onRemove]);

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
