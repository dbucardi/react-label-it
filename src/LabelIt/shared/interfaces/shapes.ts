import { StyleHTMLAttributes } from 'react';

export interface BaseShapeProps {
  readonly?: boolean;
  editing?: boolean;
  loading?: boolean;
  onRemove?: () => void;
  className?: string;
  label?: React.ReactNode;
}

export interface RectArea {
  id?: number;
  label?: string;
  xMin: number;
  yMin: number;
  xMax: number;
  yMax: number;
}
