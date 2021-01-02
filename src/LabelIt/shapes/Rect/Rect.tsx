import React, { memo, CSSProperties } from 'react';
import { BaseShapeProps } from '../../shared/interfaces/shapes';
import Tooltip from '../../shared/Tooltip';
import { TooltipWapperProps } from '../../shared/Tooltip/Tooltip';
import { StyledRect } from '../../Style';

export interface RectProps extends BaseShapeProps {
  xMin: number;
  yMin: number;
  xMax: number;
  yMax: number;
  style?: CSSProperties;
  popoverProps?: TooltipWapperProps;
}

const Rect = (props: RectProps) => {
  const {
    xMin,
    yMin,
    xMax,
    yMax,
    label,
    className,
    style,
    popoverProps = {},
    readonly = false,
    editing = false,
    loading = false,
    onRemove = () => {},
  } = props;

  const rect = (
    <StyledRect x={xMin} y={yMin} width={xMax - xMin} height={yMax - yMin} className={className} style={style} />
  );
  const rectWithPopover = label ? (
    <Tooltip overlay={label} {...popoverProps}>
      {rect}
    </Tooltip>
  ) : (
    rect
  );

  return rectWithPopover;
};

export default memo(Rect);
