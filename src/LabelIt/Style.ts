import styled from 'styled-components';

export const StyledLabelIt = styled.div`
  position: relative;
`;

export const StyledImageLayer = styled.img`
  background: green;
`;

export const StyledCanvasLayer = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
`;

export const StyledRect = styled.rect`
  fill: orange;
  fill-opacity: 0.3;
  stroke-width: 3;
  stroke: red;
`;

export const StyledResizeRect = styled.rect`
  fill: green;
  height: 6px;
  width: 6px;
  &.top-left:hover {
    cursor: se-resize;
  }
  &.top-right:hover {
    cursor: sw-resize;
  }
  &.bottom-right:hover {
    cursor: se-resize;
  }
  &.bottom-left:hover {
    cursor: sw-resize;
  }
`;

export const StyledTooltipContainer = styled.div``;
