import React from 'react';
import RCTooltip from 'rc-tooltip';
import { StyledTooltipContainer } from '../../Style';
import { TooltipProps } from 'rc-tooltip/lib/Tooltip';
import 'rc-tooltip/assets/bootstrap.css';

export interface TooltipWapperProps extends TooltipProps {}

const Tooltip = (props: TooltipWapperProps) => {
  const { children, overlay } = props;

  return <RCTooltip overlay={<StyledTooltipContainer>{overlay}</StyledTooltipContainer>}>{children}</RCTooltip>;
};

export default Tooltip;
