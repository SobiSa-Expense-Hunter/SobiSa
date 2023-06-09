import { useState } from 'react';
import type { RefObject } from 'react';

function useMouseScroll(ref: RefObject<HTMLDivElement>) {
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDown, setIsDown] = useState(false);

  const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    const offsetLeft = ref?.current?.offsetLeft;
    if (!offsetLeft) return;
    setIsDown(true);
    setStartX(event.pageX - offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDown(false);

  const onMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    const offsetLeft = ref?.current?.offsetLeft;
    if (!offsetLeft || !isDown) return;
    const x = event.pageX - offsetLeft;
    const walk = x - startX;
    // eslint-disable-next-line no-param-reassign
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const offsetLeft = ref?.current?.offsetLeft;
    if (!offsetLeft || !isDown) return;
    const x = event.pageX - offsetLeft;
    const walk = x - startX;
    // eslint-disable-next-line no-param-reassign
    ref.current.scrollLeft = scrollLeft - walk;
  };
  return { onMouseDown, onMouseLeave, onMouseMove, onMouseEnter };
}

export default useMouseScroll;
