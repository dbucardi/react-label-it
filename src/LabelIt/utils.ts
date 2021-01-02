export const getScrollingElement = () => {
  return document.scrollingElement || document.getElementsByTagName('html')[0];
};

export const getRelativeMousePosition = (containerRef) => {
  const scrollingElement = getScrollingElement();
  return (event) => {
    const { current: container } = containerRef;
    if (container) {
      const { left: xOffset, top: yOffset } = container.getBoundingClientRect();
      const x = event.pageX - xOffset - scrollingElement.scrollLeft;
      const y = event.pageY - yOffset - scrollingElement.scrollTop;
      return { x: x > 0 ? x : 0, y: y > 0 ? y : 0 };
    }
    return { x: 0, y: 0 };
  };
};
