import React, { memo, CSSProperties } from 'react';
import { BaseShapeProps, RectArea } from '../../shared/interfaces/shapes';
import Tooltip from '../../shared/Tooltip';
import { TooltipWapperProps } from '../../shared/Tooltip/Tooltip';
import { StyledRect } from '../../Style';
import ResizeRect from './ResizeRect';

export interface RectProps extends BaseShapeProps {
  index?: number;
  data: RectArea;
  style?: CSSProperties;
  onRemove?: () => void;
  onSelect?: (rect: RectArea) => void;
  popoverProps?: TooltipWapperProps;
}

const Rect = (props: RectProps) => {
  const {
    index = 0,
    data,
    label,
    className,
    style,
    popoverProps = {},
    editing = false,
    onRemove = () => {},
    onSelect = () => {},
  } = props;
  const { xMin, yMin, xMax, yMax } = data;
  const width = xMax - xMin;
  const height = yMax - yMin;

  const renderResizeRects = () => {
    return (
      <>
        <ResizeRect index={index} position="top-left" x={xMin - 3} y={yMin - 3} />
        <ResizeRect index={index} position="top-right" x={xMin - 3 + width} y={yMin - 3} />
        <ResizeRect index={index} position="bottom-right" x={xMin - 3 + width} y={yMin - 3 + height} />
        <ResizeRect index={index} position="bottom-left" x={xMin - 3} y={yMin - 3 + height} />
      </>
    );
  };

  const rect = (
    <>
      <StyledRect
        editing={editing}
        x={xMin}
        y={yMin}
        width={width}
        height={height}
        className={className}
        style={style}
        onClick={(e) => onSelect(data)}
      />
      {editing ? renderResizeRects() : <></>}
    </>
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
