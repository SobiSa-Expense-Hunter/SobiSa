// 저축 금액 구하기
const getSavingsPeriod = (productPrice: number, savingAmount: number) =>
  Math.ceil(productPrice / savingAmount);

export default getSavingsPeriod;
