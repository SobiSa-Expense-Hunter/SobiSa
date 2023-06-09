import { UserSelected } from '@/types/product';

const isUserSelectedType = (typeObj: any): typeObj is UserSelected => {
  return 'product' in typeObj && 'savingAmount' in typeObj;
};

export default isUserSelectedType;
