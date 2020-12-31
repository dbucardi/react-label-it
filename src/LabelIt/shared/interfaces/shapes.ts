import { StyleHTMLAttributes } from 'react';

export interface BaseShapeProps {
  readonly?: boolean;
  editing?: boolean;
  loading?: boolean;
  onRemove?: () => void;
  className?: string;
  label?: React.ReactNode;
}
