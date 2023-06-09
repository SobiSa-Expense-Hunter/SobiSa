import { useEffect, useRef, useState } from 'react';
/**
 * 모달의 현재 상태 제공, 닫기 애니메이션 후 모달 종료 실행
 *
 * 모달 상태를 가리키는 show값  true일 때는 모달이 현재 보이는 상태 false일 때는 모달이 종료되는 상태
 * @param onClose 모달 상태를 종료로 바꾸는 함수
 * @returns 모달의 상태, 모달 종료 함수
 */
const useModalAnimation = (onClose: () => void) => {
  const [show, setShow] = useState(true);
  const animationTimer = useRef<NodeJS.Timer>();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(animationTimer.current);
    };
  }, []);

  const animationAfterClose = () => {
    setShow(false);
    animationTimer.current = setTimeout(() => {
      onClose();
    }, 200);
  };
  return { show, animationAfterClose };
};
export default useModalAnimation;
