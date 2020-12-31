import React, { memo, CSSProperties } from 'react';
import { BaseShapeProps } from '../../shared/interfaces/shapes';
import Tooltip from '../../shared/Tooltip';
import { TooltipWapperProps } from '../../shared/Tooltip/Tooltip';
import { StyledRect } from '../../Style';

export interface RectProps extends BaseShapeProps {
  x: number;
  y: number;
  width: number;
  height: number;
  style?: CSSProperties;
  popoverProps?: TooltipWapperProps;
}

const Rect = (props: RectProps) => {
  const {
    x,
    y,
    width,
    height,
    label,
    className,
    style,
    popoverProps = {},
    readonly = false,
    editing = false,
    loading = false,
    onRemove = () => {},
  } = props;

  const rect = <StyledRect x={x} y={y} width={width} height={height} className={className} style={style} />;
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
