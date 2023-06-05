import CustomError from '@/components/common/error';

function Custom500() {
  return (
    <CustomError
      mainTitle='505 ERROR..'
      subTextLines={['서버 문제에요.']}
      buttonText='홈으로 돌아가기'
    />
  );
}

export default Custom500;
