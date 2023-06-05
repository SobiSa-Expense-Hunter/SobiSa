import CustomError from '@/components/common/error';

function Error500() {
  return (
    <CustomError
      mainTitle='잠시 후 다시 확인해주세요!'
      subTextLines={[
        '죄송합니다. 지금 소비사 서비스가 살짝 불안정해요.',
        '문제를 해결하기위해 노력중이니 잠시 후 다시 확인해주세요.',
      ]}
      buttonText='홈으로 돌아가기'
    />
  );
}

export default Error500;
