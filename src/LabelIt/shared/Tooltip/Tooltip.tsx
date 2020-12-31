import React, { useEffect } from 'react';
import RCTooltip from 'rc-tooltip';
import { StyledTooltipContainer } from '../../Style';
import { TooltipProps } from 'rc-tooltip/lib/Tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';

export interface TooltipWapperProps extends TooltipProps {}

const Tooltip = (props: TooltipWapperProps) => {
  const { children, overlay } = props;

  useEffect(() => {
    console.log(children);
  }, [children]);

  return <RCTooltip overlay={<StyledTooltipContainer>{overlay}</StyledTooltipContainer>}>{children}</RCTooltip>;
};

export default Tooltip;
