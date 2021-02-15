import React, { useRef, useState, useMemo } from 'react';
import Rect from './shapes/Rect';
import { RectProps } from './shapes/Rect/Rect';
import { RectArea } from './shared/interfaces/shapes';
import { StyledCanvasLayer } from './Style';
import { getRelativeMousePosition } from './utils';

export interface CanvasLayerProps {
  children: React.ReactNode[];
  readonly: boolean;
  onAdd?: (newLabel: RectArea) => void;
}

const CanvasLayer = (props: CanvasLayerProps) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startDrawingPoint, setStartDrawingPoint] = useState({ x: 0, y: 0 });
  const [drawingRectProps, setDrawingRectProps] = useState<RectProps>(null);
  const containerRef = useRef();
  const { children, readonly, onAdd = () => {} } = props;

  const resetDrawing = () => {
    setIsMouseDown(false);
    setDrawingRectProps(null);
  };

  const getRelativeArea = (x, y): RectProps => {
    const xMin = startDrawingPoint.x < x ? startDrawingPoint.x : x;
    const xMax = startDrawingPoint.x < x ? x : startDrawingPoint.x;
    const yMin = startDrawingPoint.y < y ? startDrawingPoint.y : y;
    const yMax = startDrawingPoint.y < y ? y : startDrawingPoint.y;
    return { data: { xMin, xMax, yMin, yMax, id: 0 } };
  };

  const drawingEvents = useMemo(() => {
    const onMouseDown = (e) => {
      setIsMouseDown(true);
      const { x, y } = getRelativeMousePosition(containerRef)(e);
      setStartDrawingPoint({ x, y });
    };

    const onMouseMove = (e) => {
      const { x: currentX, y: currentY } = getRelativeMousePosition(containerRef)(e);
      const drawingRect = getRelativeArea(currentX, currentY);
      setDrawingRectProps(drawingRect);
    };

    const onMouseUp = (e) => {
      resetDrawing();
      const { x: currentX, y: currentY } = getRelativeMousePosition(containerRef)(e);
      const drawingRect = getRelativeArea(currentX, currentY);
      onAdd(drawingRect.data);
    };

    const onMouseLeave = (e) => resetDrawing();

    if (!isMouseDown) {
      return { onMouseDown };
    } else {
      return {
        onMouseDown,
        onMouseMove,
        onMouseUp,
        onMouseLeave,
      };
    }
  }, [isMouseDown]);

  const renderDrawingRect = () => {
    return <Rect {...drawingRectProps} />;
  };

  return (
    <StyledCanvasLayer ref={containerRef} width={720} height={480} {...drawingEvents}>
      {children}
      {isMouseDown && drawingRectProps ? renderDrawingRect() : <></>}
    </StyledCanvasLayer>
  );
};

export default CanvasLayer;
