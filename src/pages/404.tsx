import CustomError from '@/components/common/error';

function Error404() {
  return (
    <CustomError
      mainTitle='여기가 아니에요!'
      subTextLines={['지금 입력하신 주소는 사라졌거나 없는 주소에요.', '주소를 다시 확인해주세요.']}
      buttonText='홈으로 돌아가기'
    />
  );
}

export default Error404;
