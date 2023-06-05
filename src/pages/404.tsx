import CustomError from '@/components/common/error';

function Error404() {
  return (
    <CustomError
      mainTitle='404 ERROR..'
      subTextLines={['잘못 들어왔어요!']}
      buttonText='홈으로 돌아가기'
    />
  );
}

export default Error404;
